/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_SadInputs */

const en_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unhappy`)
};

const cs_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nespokojený`)
};

const sk_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nespokojný`)
};

const es_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descontento`)
};

const de_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unzufrieden`)
};

/**
* | output |
* | --- |
* | "Unhappy" |
*
* @param {Aria_Rating_SadInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_rating_sad = /** @type {((inputs?: Aria_Rating_SadInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_SadInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_sad(inputs)
	if (locale === "sk") return sk_aria_rating_sad(inputs)
	if (locale === "es") return es_aria_rating_sad(inputs)
	if (locale === "de") return de_aria_rating_sad(inputs)
	return en_aria_rating_sad(inputs)
});