/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_History_AskInputs */

const en_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask something`)
};

const cs_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeptat se`)
};

const sk_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opýtať sa`)
};

/**
* | output |
* | --- |
* | "Ask something" |
*
* @param {Empty_History_AskInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const empty_history_ask = /** @type {((inputs?: Empty_History_AskInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_History_AskInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_history_ask(inputs)
	if (locale === "sk") return sk_empty_history_ask(inputs)
	return en_empty_history_ask(inputs)
});