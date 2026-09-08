/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ star: NonNullable<unknown> }} Aria_Rating_StarInputs */

const en_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rate ${i?.star} out of 5`)
};

const cs_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ohodnotit ${i?.star} z 5`)
};

const sk_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ohodnotiť ${i?.star} z 5`)
};

/**
* | output |
* | --- |
* | "Rate {star} out of 5" |
*
* @param {Aria_Rating_StarInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_rating_star = /** @type {((inputs: Aria_Rating_StarInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_StarInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_star(inputs)
	if (locale === "sk") return sk_aria_rating_star(inputs)
	return en_aria_rating_star(inputs)
});