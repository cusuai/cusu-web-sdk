/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_OkInputs */

const en_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okay`)
};

const cs_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neutrální`)
};

/**
* | output |
* | --- |
* | "Okay" |
*
* @param {Aria_Rating_OkInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_rating_ok = /** @type {((inputs?: Aria_Rating_OkInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_OkInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_ok(inputs)
	return en_aria_rating_ok(inputs)
});