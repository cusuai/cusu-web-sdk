/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_HearingInputs */

const en_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I can hear you`)
};

const cs_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slyším vás`)
};

const sk_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Počujem vás`)
};

/**
* | output |
* | --- |
* | "I can hear you" |
*
* @param {Call_HearingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const call_hearing = /** @type {((inputs?: Call_HearingInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_HearingInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_hearing(inputs)
	if (locale === "sk") return sk_call_hearing(inputs)
	return en_call_hearing(inputs)
});