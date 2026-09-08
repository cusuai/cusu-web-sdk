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

/**
* | output |
* | --- |
* | "This conversation is closed." |
*
* @param {Conversation_ClosedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const conversation_closed = /** @type {((inputs?: Conversation_ClosedInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_ClosedInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_closed(inputs)
	if (locale === "sk") return sk_conversation_closed(inputs)
	return en_conversation_closed(inputs)
});