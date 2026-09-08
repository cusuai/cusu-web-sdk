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

const sk_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S čím vám môžem pomôcť?`)
};

const es_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿En qué puedo ayudarte?`)
};

const de_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie kann ich Ihnen helfen?`)
};

/**
* | output |
* | --- |
* | "How can I help?" |
*
* @param {Empty_Chat_TitleInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const empty_chat_title = /** @type {((inputs?: Empty_Chat_TitleInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Chat_TitleInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_chat_title(inputs)
	if (locale === "sk") return sk_empty_chat_title(inputs)
	if (locale === "es") return es_empty_chat_title(inputs)
	if (locale === "de") return de_empty_chat_title(inputs)
	return en_empty_chat_title(inputs)
});