/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_CallInputs */

const en_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Call`)
};

const cs_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hovor`)
};

/**
* | output |
* | --- |
* | "Call" |
*
* @param {Aria_CallInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_call = /** @type {((inputs?: Aria_CallInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_CallInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_call(inputs)
	return en_aria_call(inputs)
});