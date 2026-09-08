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

const sk_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neutrálny`)
};

const es_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceptable`)
};

const de_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Ordnung`)
};

const fr_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correct`)
};

const pl_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W porządku`)
};

const hu_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Megfelelő`)
};

const it_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nella media`)
};

const nl_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oké`)
};

const pt_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razoável`)
};

const da_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okay`)
};

const sl_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`V redu`)
};

const hr_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`U redu`)
};

const ro_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acceptabil`)
};

const sv_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okej`)
};

const fi_aria_rating_ok = /** @type {(inputs: Aria_Rating_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kohtalainen`)
};

/**
* | output |
* | --- |
* | "Okay" |
*
* @param {Aria_Rating_OkInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_rating_ok = /** @type {((inputs?: Aria_Rating_OkInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_OkInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_ok(inputs)
	if (locale === "sk") return sk_aria_rating_ok(inputs)
	if (locale === "es") return es_aria_rating_ok(inputs)
	if (locale === "de") return de_aria_rating_ok(inputs)
	if (locale === "fr") return fr_aria_rating_ok(inputs)
	if (locale === "pl") return pl_aria_rating_ok(inputs)
	if (locale === "hu") return hu_aria_rating_ok(inputs)
	if (locale === "it") return it_aria_rating_ok(inputs)
	if (locale === "nl") return nl_aria_rating_ok(inputs)
	if (locale === "pt") return pt_aria_rating_ok(inputs)
	if (locale === "da") return da_aria_rating_ok(inputs)
	if (locale === "sl") return sl_aria_rating_ok(inputs)
	if (locale === "hr") return hr_aria_rating_ok(inputs)
	if (locale === "ro") return ro_aria_rating_ok(inputs)
	if (locale === "sv") return sv_aria_rating_ok(inputs)
	if (locale === "fi") return fi_aria_rating_ok(inputs)
	return en_aria_rating_ok(inputs)
});