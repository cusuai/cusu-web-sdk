/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_CallInputs */

const en_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Call`)
};

const cs_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hovor`)
};

const sk_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hovor`)
};

const es_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Llamar`)
};

const de_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anrufen`)
};

const fr_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appeler`)
};

const pl_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadzwoń`)
};

const hu_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hívás`)
};

const it_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiama`)
};

const nl_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bellen`)
};

const pt_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ligar`)
};

const da_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ring`)
};

const sl_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokliči`)
};

const hr_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazovi`)
};

const ro_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apelează`)
};

const sv_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ring`)
};

const fi_aria_call = /** @type {(inputs: Aria_CallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soita`)
};

/**
* | output |
* | --- |
* | "Call" |
*
* @param {Aria_CallInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_call = /** @type {((inputs?: Aria_CallInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_CallInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_call(inputs)
	if (locale === "sk") return sk_aria_call(inputs)
	if (locale === "es") return es_aria_call(inputs)
	if (locale === "de") return de_aria_call(inputs)
	if (locale === "fr") return fr_aria_call(inputs)
	if (locale === "pl") return pl_aria_call(inputs)
	if (locale === "hu") return hu_aria_call(inputs)
	if (locale === "it") return it_aria_call(inputs)
	if (locale === "nl") return nl_aria_call(inputs)
	if (locale === "pt") return pt_aria_call(inputs)
	if (locale === "da") return da_aria_call(inputs)
	if (locale === "sl") return sl_aria_call(inputs)
	if (locale === "hr") return hr_aria_call(inputs)
	if (locale === "ro") return ro_aria_call(inputs)
	if (locale === "sv") return sv_aria_call(inputs)
	if (locale === "fi") return fi_aria_call(inputs)
	return en_aria_call(inputs)
});