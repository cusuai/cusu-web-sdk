/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_New_ConversationInputs */

const en_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New conversation`)
};

const cs_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nová konverzace`)
};

const sk_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nová konverzácia`)
};

/**
* | output |
* | --- |
* | "New conversation" |
*
* @param {Aria_New_ConversationInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_new_conversation = /** @type {((inputs?: Aria_New_ConversationInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_New_ConversationInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_new_conversation(inputs)
	if (locale === "sk") return sk_aria_new_conversation(inputs)
	return en_aria_new_conversation(inputs)
});