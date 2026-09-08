/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Conversation_GoneInputs */

const en_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This conversation no longer exists.`)
};

const cs_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzace už neexistuje.`)
};

const sk_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzácia už neexistuje.`)
};

const es_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conversación ya no existe.`)
};

const de_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Unterhaltung existiert nicht mehr.`)
};

const fr_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette conversation n’existe plus.`)
};

const pl_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta rozmowa już nie istnieje.`)
};

const hu_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ez a beszélgetés már nem létezik.`)
};

const it_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa conversazione non esiste più.`)
};

const nl_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit gesprek bestaat niet meer.`)
};

const pt_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conversa já não existe.`)
};

const da_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denne samtale findes ikke længere.`)
};

const sl_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta pogovor ne obstaja več.`)
};

const hr_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ovaj razgovor više ne postoji.`)
};

const ro_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Această conversație nu mai există.`)
};

const sv_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här konversationen finns inte längre.`)
};

const fi_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tätä keskustelua ei enää ole.`)
};

/**
* | output |
* | --- |
* | "This conversation no longer exists." |
*
* @param {Error_Conversation_GoneInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_conversation_gone = /** @type {((inputs?: Error_Conversation_GoneInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Conversation_GoneInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_conversation_gone(inputs)
	if (locale === "sk") return sk_error_conversation_gone(inputs)
	if (locale === "es") return es_error_conversation_gone(inputs)
	if (locale === "de") return de_error_conversation_gone(inputs)
	if (locale === "fr") return fr_error_conversation_gone(inputs)
	if (locale === "pl") return pl_error_conversation_gone(inputs)
	if (locale === "hu") return hu_error_conversation_gone(inputs)
	if (locale === "it") return it_error_conversation_gone(inputs)
	if (locale === "nl") return nl_error_conversation_gone(inputs)
	if (locale === "pt") return pt_error_conversation_gone(inputs)
	if (locale === "da") return da_error_conversation_gone(inputs)
	if (locale === "sl") return sl_error_conversation_gone(inputs)
	if (locale === "hr") return hr_error_conversation_gone(inputs)
	if (locale === "ro") return ro_error_conversation_gone(inputs)
	if (locale === "sv") return sv_error_conversation_gone(inputs)
	if (locale === "fi") return fi_error_conversation_gone(inputs)
	return en_error_conversation_gone(inputs)
});