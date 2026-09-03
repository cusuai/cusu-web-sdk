/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Hide_ChatInputs */

const en_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide chat`)
};

const cs_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrýt chat`)
};

/**
* | output |
* | --- |
* | "Hide chat" |
*
* @param {Aria_Hide_ChatInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_hide_chat = /** @type {((inputs?: Aria_Hide_ChatInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Hide_ChatInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_hide_chat(inputs)
	return en_aria_hide_chat(inputs)
});