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

/**
* | output |
* | --- |
* | "New conversation" |
*
* @param {Conversation_NewInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const conversation_new = /** @type {((inputs?: Conversation_NewInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_NewInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_new(inputs)
	if (locale === "sk") return sk_conversation_new(inputs)
	return en_conversation_new(inputs)
});