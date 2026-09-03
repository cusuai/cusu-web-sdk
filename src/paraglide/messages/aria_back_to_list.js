/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Back_To_ListInputs */

const en_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to overview`)
};

const cs_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zpět na přehled`)
};

/**
* | output |
* | --- |
* | "Back to overview" |
*
* @param {Aria_Back_To_ListInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_back_to_list = /** @type {((inputs?: Aria_Back_To_ListInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Back_To_ListInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_back_to_list(inputs)
	return en_aria_back_to_list(inputs)
});