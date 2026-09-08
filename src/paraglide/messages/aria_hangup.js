/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_HangupInputs */

const en_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hang up`)
};

const cs_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zavěsit`)
};

const sk_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zložiť`)
};

const es_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colgar`)
};

const de_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auflegen`)
};

const fr_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccrocher`)
};

const pl_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozłącz się`)
};

const hu_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hívás befejezése`)
};

const it_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termina chiamata`)
};

const nl_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ophangen`)
};

const pt_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desligar`)
};

const da_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Læg på`)
};

const sl_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Končaj klic`)
};

const hr_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prekini poziv`)
};

const ro_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Încheie apelul`)
};

const sv_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg på`)
};

const fi_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lopeta puhelu`)
};

/**
* | output |
* | --- |
* | "Hang up" |
*
* @param {Aria_HangupInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_hangup = /** @type {((inputs?: Aria_HangupInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_HangupInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_hangup(inputs)
	if (locale === "sk") return sk_aria_hangup(inputs)
	if (locale === "es") return es_aria_hangup(inputs)
	if (locale === "de") return de_aria_hangup(inputs)
	if (locale === "fr") return fr_aria_hangup(inputs)
	if (locale === "pl") return pl_aria_hangup(inputs)
	if (locale === "hu") return hu_aria_hangup(inputs)
	if (locale === "it") return it_aria_hangup(inputs)
	if (locale === "nl") return nl_aria_hangup(inputs)
	if (locale === "pt") return pt_aria_hangup(inputs)
	if (locale === "da") return da_aria_hangup(inputs)
	if (locale === "sl") return sl_aria_hangup(inputs)
	if (locale === "hr") return hr_aria_hangup(inputs)
	if (locale === "ro") return ro_aria_hangup(inputs)
	if (locale === "sv") return sv_aria_hangup(inputs)
	if (locale === "fi") return fi_aria_hangup(inputs)
	return en_aria_hangup(inputs)
});