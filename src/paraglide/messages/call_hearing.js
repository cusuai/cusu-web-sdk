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

/**
* | output |
* | --- |
* | "I can hear you" |
*
* @param {Call_HearingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const call_hearing = /** @type {((inputs?: Call_HearingInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_HearingInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_hearing(inputs)
	return en_call_hearing(inputs)
});