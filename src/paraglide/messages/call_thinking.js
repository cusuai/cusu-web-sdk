/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_ThinkingInputs */

const en_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thinking`)
};

const cs_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přemýšlím`)
};

const sk_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premýšľam`)
};

const es_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensando`)
};

const de_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denkt nach`)
};

/**
* | output |
* | --- |
* | "Thinking" |
*
* @param {Call_ThinkingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const call_thinking = /** @type {((inputs?: Call_ThinkingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_ThinkingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_thinking(inputs)
	if (locale === "sk") return sk_call_thinking(inputs)
	if (locale === "es") return es_call_thinking(inputs)
	if (locale === "de") return de_call_thinking(inputs)
	return en_call_thinking(inputs)
});