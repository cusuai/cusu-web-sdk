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

const sk_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktovať`)
};

/**
* | output |
* | --- |
* | "Dictate" |
*
* @param {Aria_DictateInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_dictate = /** @type {((inputs?: Aria_DictateInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_DictateInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_dictate(inputs)
	if (locale === "sk") return sk_aria_dictate(inputs)
	return en_aria_dictate(inputs)
});