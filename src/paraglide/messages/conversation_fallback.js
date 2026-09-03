/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Conversation_FallbackInputs */

const en_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversation`)
};

const cs_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzace`)
};

/**
* | output |
* | --- |
* | "Conversation" |
*
* @param {Conversation_FallbackInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const conversation_fallback = /** @type {((inputs?: Conversation_FallbackInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_FallbackInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_fallback(inputs)
	return en_conversation_fallback(inputs)
});