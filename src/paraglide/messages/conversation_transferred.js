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

/**
* | output |
* | --- |
* | "The conversation was handed over to an operator." |
*
* @param {Conversation_TransferredInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const conversation_transferred = /** @type {((inputs?: Conversation_TransferredInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_TransferredInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_transferred(inputs)
	if (locale === "sk") return sk_conversation_transferred(inputs)
	return en_conversation_transferred(inputs)
});