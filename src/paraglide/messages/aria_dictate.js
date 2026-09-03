/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_DictateInputs */

const en_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dictate`)
};

const cs_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktovat`)
};

/**
* | output |
* | --- |
* | "Dictate" |
*
* @param {Aria_DictateInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_dictate = /** @type {((inputs?: Aria_DictateInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_DictateInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_dictate(inputs)
	return en_aria_dictate(inputs)
});