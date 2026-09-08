/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_HappyInputs */

const en_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Happy`)
};

const cs_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spokojený`)
};

const sk_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spokojný`)
};

/**
* | output |
* | --- |
* | "Happy" |
*
* @param {Aria_Rating_HappyInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_rating_happy = /** @type {((inputs?: Aria_Rating_HappyInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_HappyInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_happy(inputs)
	if (locale === "sk") return sk_aria_rating_happy(inputs)
	return en_aria_rating_happy(inputs)
});