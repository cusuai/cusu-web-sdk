/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Conversation_NewInputs */

const en_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New conversation`)
};

const cs_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nová konverzace`)
};

const sk_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nová konverzácia`)
};

const es_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva conversación`)
};

const de_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Unterhaltung`)
};

const fr_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle conversation`)
};

const pl_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa rozmowa`)
};

const hu_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Új beszélgetés`)
};

const it_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova conversazione`)
};

const nl_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw gesprek`)
};

const pt_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova conversa`)
};

const da_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny samtale`)
};

const sl_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nov pogovor`)
};

const hr_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novi razgovor`)
};

const ro_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversație nouă`)
};

const sv_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny konversation`)
};

const fi_conversation_new = /** @type {(inputs: Conversation_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uusi keskustelu`)
};

/**
* | output |
* | --- |
* | "New conversation" |
*
* @param {Conversation_NewInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const conversation_new = /** @type {((inputs?: Conversation_NewInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_NewInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_new(inputs)
	if (locale === "sk") return sk_conversation_new(inputs)
	if (locale === "es") return es_conversation_new(inputs)
	if (locale === "de") return de_conversation_new(inputs)
	if (locale === "fr") return fr_conversation_new(inputs)
	if (locale === "pl") return pl_conversation_new(inputs)
	if (locale === "hu") return hu_conversation_new(inputs)
	if (locale === "it") return it_conversation_new(inputs)
	if (locale === "nl") return nl_conversation_new(inputs)
	if (locale === "pt") return pt_conversation_new(inputs)
	if (locale === "da") return da_conversation_new(inputs)
	if (locale === "sl") return sl_conversation_new(inputs)
	if (locale === "hr") return hr_conversation_new(inputs)
	if (locale === "ro") return ro_conversation_new(inputs)
	if (locale === "sv") return sv_conversation_new(inputs)
	if (locale === "fi") return fi_conversation_new(inputs)
	return en_conversation_new(inputs)
});