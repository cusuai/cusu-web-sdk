/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Conversation_ClosedInputs */

const en_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This conversation is closed.`)
};

const cs_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzace je uzavřená.`)
};

const sk_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzácia je uzatvorená.`)
};

const es_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conversación está cerrada.`)
};

const de_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Unterhaltung ist geschlossen.`)
};

const fr_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette conversation est fermée.`)
};

const pl_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta rozmowa jest zamknięta.`)
};

const hu_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ez a beszélgetés lezárult.`)
};

const it_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa conversazione è chiusa.`)
};

const nl_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit gesprek is gesloten.`)
};

const pt_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conversa está encerrada.`)
};

const da_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denne samtale er lukket.`)
};

const sl_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta pogovor je zaprt.`)
};

const hr_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ovaj je razgovor zatvoren.`)
};

const ro_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Această conversație este închisă.`)
};

const sv_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här konversationen är stängd.`)
};

const fi_conversation_closed = /** @type {(inputs: Conversation_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tämä keskustelu on suljettu.`)
};

/**
* | output |
* | --- |
* | "This conversation is closed." |
*
* @param {Conversation_ClosedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const conversation_closed = /** @type {((inputs?: Conversation_ClosedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_ClosedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_closed(inputs)
	if (locale === "sk") return sk_conversation_closed(inputs)
	if (locale === "es") return es_conversation_closed(inputs)
	if (locale === "de") return de_conversation_closed(inputs)
	if (locale === "fr") return fr_conversation_closed(inputs)
	if (locale === "pl") return pl_conversation_closed(inputs)
	if (locale === "hu") return hu_conversation_closed(inputs)
	if (locale === "it") return it_conversation_closed(inputs)
	if (locale === "nl") return nl_conversation_closed(inputs)
	if (locale === "pt") return pt_conversation_closed(inputs)
	if (locale === "da") return da_conversation_closed(inputs)
	if (locale === "sl") return sl_conversation_closed(inputs)
	if (locale === "hr") return hr_conversation_closed(inputs)
	if (locale === "ro") return ro_conversation_closed(inputs)
	if (locale === "sv") return sv_conversation_closed(inputs)
	if (locale === "fi") return fi_conversation_closed(inputs)
	return en_conversation_closed(inputs)
});