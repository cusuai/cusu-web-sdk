/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Back_To_ListInputs */

const en_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to overview`)
};

const cs_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zpět na přehled`)
};

const sk_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Späť na prehľad`)
};

const es_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al resumen`)
};

const de_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur Übersicht`)
};

/**
* | output |
* | --- |
* | "Back to overview" |
*
* @param {Aria_Back_To_ListInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_back_to_list = /** @type {((inputs?: Aria_Back_To_ListInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Back_To_ListInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_back_to_list(inputs)
	if (locale === "sk") return sk_aria_back_to_list(inputs)
	if (locale === "es") return es_aria_back_to_list(inputs)
	if (locale === "de") return de_aria_back_to_list(inputs)
	return en_aria_back_to_list(inputs)
});