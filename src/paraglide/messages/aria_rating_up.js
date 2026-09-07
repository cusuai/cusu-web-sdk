/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_UpInputs */

const en_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbs up`)
};

const cs_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec nahoru`)
};

/**
* | output |
* | --- |
* | "Thumbs up" |
*
* @param {Aria_Rating_UpInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_rating_up = /** @type {((inputs?: Aria_Rating_UpInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_UpInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_up(inputs)
	return en_aria_rating_up(inputs)
});