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

const sk_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec hore`)
};

const es_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulgar arriba`)
};

const de_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daumen hoch`)
};

/**
* | output |
* | --- |
* | "Thumbs up" |
*
* @param {Aria_Rating_UpInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_rating_up = /** @type {((inputs?: Aria_Rating_UpInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_UpInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_up(inputs)
	if (locale === "sk") return sk_aria_rating_up(inputs)
	if (locale === "es") return es_aria_rating_up(inputs)
	if (locale === "de") return de_aria_rating_up(inputs)
	return en_aria_rating_up(inputs)
});