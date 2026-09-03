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

/**
* | output |
* | --- |
* | "Thinking" |
*
* @param {Call_ThinkingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const call_thinking = /** @type {((inputs?: Call_ThinkingInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_ThinkingInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_thinking(inputs)
	return en_call_thinking(inputs)
});