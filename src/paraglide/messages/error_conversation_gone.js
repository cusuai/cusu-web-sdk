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

/**
* | output |
* | --- |
* | "This conversation no longer exists." |
*
* @param {Error_Conversation_GoneInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_conversation_gone = /** @type {((inputs?: Error_Conversation_GoneInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Conversation_GoneInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_conversation_gone(inputs)
	if (locale === "sk") return sk_error_conversation_gone(inputs)
	return en_error_conversation_gone(inputs)
});