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

/**
* | output |
* | --- |
* | "This conversation is closed." |
*
* @param {Conversation_ClosedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const conversation_closed = /** @type {((inputs?: Conversation_ClosedInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_ClosedInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_closed(inputs)
	return en_conversation_closed(inputs)
});