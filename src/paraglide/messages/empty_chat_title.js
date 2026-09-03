/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_Chat_TitleInputs */

const en_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How can I help?`)
};

const cs_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S čím ti můžu pomoct?`)
};

/**
* | output |
* | --- |
* | "How can I help?" |
*
* @param {Empty_Chat_TitleInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const empty_chat_title = /** @type {((inputs?: Empty_Chat_TitleInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Chat_TitleInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_chat_title(inputs)
	return en_empty_chat_title(inputs)
});