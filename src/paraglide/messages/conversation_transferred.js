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

/**
* | output |
* | --- |
* | "The conversation was handed over to an operator." |
*
* @param {Conversation_TransferredInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const conversation_transferred = /** @type {((inputs?: Conversation_TransferredInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_TransferredInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_transferred(inputs)
	if (locale === "sk") return sk_conversation_transferred(inputs)
	if (locale === "es") return es_conversation_transferred(inputs)
	if (locale === "de") return de_conversation_transferred(inputs)
	return en_conversation_transferred(inputs)
});