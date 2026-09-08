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

const sk_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec dole`)
};

const es_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulgar abajo`)
};

const de_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daumen runter`)
};

/**
* | output |
* | --- |
* | "Thumbs down" |
*
* @param {Aria_Rating_DownInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_rating_down = /** @type {((inputs?: Aria_Rating_DownInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_DownInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_down(inputs)
	if (locale === "sk") return sk_aria_rating_down(inputs)
	if (locale === "es") return es_aria_rating_down(inputs)
	if (locale === "de") return de_aria_rating_down(inputs)
	return en_aria_rating_down(inputs)
});