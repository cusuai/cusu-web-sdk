/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_DownInputs */

const en_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbs down`)
};

const cs_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec dolů`)
};

/**
* | output |
* | --- |
* | "Thumbs down" |
*
* @param {Aria_Rating_DownInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_rating_down = /** @type {((inputs?: Aria_Rating_DownInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_DownInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_down(inputs)
	return en_aria_rating_down(inputs)
});