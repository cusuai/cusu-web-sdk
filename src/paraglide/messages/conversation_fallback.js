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

const sk_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzácia`)
};

const es_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversación`)
};

const de_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterhaltung`)
};

/**
* | output |
* | --- |
* | "Conversation" |
*
* @param {Conversation_FallbackInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const conversation_fallback = /** @type {((inputs?: Conversation_FallbackInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_FallbackInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_fallback(inputs)
	if (locale === "sk") return sk_conversation_fallback(inputs)
	if (locale === "es") return es_conversation_fallback(inputs)
	if (locale === "de") return de_conversation_fallback(inputs)
	return en_conversation_fallback(inputs)
});