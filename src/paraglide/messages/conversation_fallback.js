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

const fr_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversation`)
};

const pl_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmowa`)
};

const hu_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beszélgetés`)
};

const it_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversazione`)
};

const nl_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesprek`)
};

const pt_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversa`)
};

const da_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samtale`)
};

const sl_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pogovor`)
};

const hr_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razgovor`)
};

const ro_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversație`)
};

const sv_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konversation`)
};

const fi_conversation_fallback = /** @type {(inputs: Conversation_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keskustelu`)
};

/**
* | output |
* | --- |
* | "Conversation" |
*
* @param {Conversation_FallbackInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const conversation_fallback = /** @type {((inputs?: Conversation_FallbackInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_FallbackInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_fallback(inputs)
	if (locale === "sk") return sk_conversation_fallback(inputs)
	if (locale === "es") return es_conversation_fallback(inputs)
	if (locale === "de") return de_conversation_fallback(inputs)
	if (locale === "fr") return fr_conversation_fallback(inputs)
	if (locale === "pl") return pl_conversation_fallback(inputs)
	if (locale === "hu") return hu_conversation_fallback(inputs)
	if (locale === "it") return it_conversation_fallback(inputs)
	if (locale === "nl") return nl_conversation_fallback(inputs)
	if (locale === "pt") return pt_conversation_fallback(inputs)
	if (locale === "da") return da_conversation_fallback(inputs)
	if (locale === "sl") return sl_conversation_fallback(inputs)
	if (locale === "hr") return hr_conversation_fallback(inputs)
	if (locale === "ro") return ro_conversation_fallback(inputs)
	if (locale === "sv") return sv_conversation_fallback(inputs)
	if (locale === "fi") return fi_conversation_fallback(inputs)
	return en_conversation_fallback(inputs)
});