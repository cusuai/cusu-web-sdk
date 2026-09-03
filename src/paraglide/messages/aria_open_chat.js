/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Open_ChatInputs */

const en_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open chat`)
};

const cs_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otevřít chat`)
};

/**
* | output |
* | --- |
* | "Open chat" |
*
* @param {Aria_Open_ChatInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_open_chat = /** @type {((inputs?: Aria_Open_ChatInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Open_ChatInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_open_chat(inputs)
	return en_aria_open_chat(inputs)
});