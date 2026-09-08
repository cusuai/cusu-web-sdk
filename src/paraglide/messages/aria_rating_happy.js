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

const es_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contento`)
};

const de_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zufrieden`)
};

const fr_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Satisfait`)
};

const pl_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadowolony`)
};

const hu_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elégedett`)
};

const it_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soddisfatto`)
};

const nl_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tevreden`)
};

const pt_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Satisfeito`)
};

const da_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tilfreds`)
};

const sl_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadovoljni`)
};

const hr_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadovoljni`)
};

const ro_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mulțumit`)
};

const sv_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nöjd`)
};

const fi_aria_rating_happy = /** @type {(inputs: Aria_Rating_HappyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tyytyväinen`)
};

/**
* | output |
* | --- |
* | "Happy" |
*
* @param {Aria_Rating_HappyInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_rating_happy = /** @type {((inputs?: Aria_Rating_HappyInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_HappyInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_happy(inputs)
	if (locale === "sk") return sk_aria_rating_happy(inputs)
	if (locale === "es") return es_aria_rating_happy(inputs)
	if (locale === "de") return de_aria_rating_happy(inputs)
	if (locale === "fr") return fr_aria_rating_happy(inputs)
	if (locale === "pl") return pl_aria_rating_happy(inputs)
	if (locale === "hu") return hu_aria_rating_happy(inputs)
	if (locale === "it") return it_aria_rating_happy(inputs)
	if (locale === "nl") return nl_aria_rating_happy(inputs)
	if (locale === "pt") return pt_aria_rating_happy(inputs)
	if (locale === "da") return da_aria_rating_happy(inputs)
	if (locale === "sl") return sl_aria_rating_happy(inputs)
	if (locale === "hr") return hr_aria_rating_happy(inputs)
	if (locale === "ro") return ro_aria_rating_happy(inputs)
	if (locale === "sv") return sv_aria_rating_happy(inputs)
	if (locale === "fi") return fi_aria_rating_happy(inputs)
	return en_aria_rating_happy(inputs)
});