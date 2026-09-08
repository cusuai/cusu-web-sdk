/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Conversation_TransferredInputs */

const en_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The conversation was handed over to an operator.`)
};

const cs_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzace byla předána operátorovi.`)
};

const sk_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzácia bola odovzdaná operátorovi.`)
};

const es_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La conversación se ha transferido a un operador.`)
};

const de_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Unterhaltung wurde an einen Mitarbeiter übergeben.`)
};

const fr_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La conversation a été transférée à un opérateur.`)
};

const pl_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmowa została przekazana operatorowi.`)
};

const hu_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A beszélgetést átadtuk egy ügyintézőnek.`)
};

const it_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La conversazione è stata trasferita a un operatore.`)
};

const nl_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het gesprek is overgedragen aan een medewerker.`)
};

const pt_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A conversa foi transferida para um operador.`)
};

const da_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samtalen blev overdraget til en medarbejder.`)
};

const sl_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pogovor je bil predan operaterju.`)
};

const hr_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razgovor je predan operateru.`)
};

const ro_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversația a fost transferată unui operator.`)
};

const sv_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konversationen överlämnades till en medarbetare.`)
};

const fi_conversation_transferred = /** @type {(inputs: Conversation_TransferredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keskustelu siirrettiin asiakaspalvelijalle.`)
};

/**
* | output |
* | --- |
* | "The conversation was handed over to an operator." |
*
* @param {Conversation_TransferredInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const conversation_transferred = /** @type {((inputs?: Conversation_TransferredInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_TransferredInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_transferred(inputs)
	if (locale === "sk") return sk_conversation_transferred(inputs)
	if (locale === "es") return es_conversation_transferred(inputs)
	if (locale === "de") return de_conversation_transferred(inputs)
	if (locale === "fr") return fr_conversation_transferred(inputs)
	if (locale === "pl") return pl_conversation_transferred(inputs)
	if (locale === "hu") return hu_conversation_transferred(inputs)
	if (locale === "it") return it_conversation_transferred(inputs)
	if (locale === "nl") return nl_conversation_transferred(inputs)
	if (locale === "pt") return pt_conversation_transferred(inputs)
	if (locale === "da") return da_conversation_transferred(inputs)
	if (locale === "sl") return sl_conversation_transferred(inputs)
	if (locale === "hr") return hr_conversation_transferred(inputs)
	if (locale === "ro") return ro_conversation_transferred(inputs)
	if (locale === "sv") return sv_conversation_transferred(inputs)
	if (locale === "fi") return fi_conversation_transferred(inputs)
	return en_conversation_transferred(inputs)
});