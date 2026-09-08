/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} HangupInputs */

const en_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hang up`)
};

const cs_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zavěsit`)
};

const sk_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zložiť`)
};

const es_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colgar`)
};

const de_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auflegen`)
};

const fr_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccrocher`)
};

const pl_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozłącz się`)
};

const hu_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hívás befejezése`)
};

const it_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termina chiamata`)
};

const nl_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ophangen`)
};

const pt_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desligar`)
};

const da_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Læg på`)
};

const sl_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Končaj klic`)
};

const hr_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prekini poziv`)
};

const ro_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Încheie apelul`)
};

const sv_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg på`)
};

const fi_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lopeta puhelu`)
};

/**
* | output |
* | --- |
* | "Hang up" |
*
* @param {HangupInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const hangup = /** @type {((inputs?: HangupInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<HangupInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_hangup(inputs)
	if (locale === "sk") return sk_hangup(inputs)
	if (locale === "es") return es_hangup(inputs)
	if (locale === "de") return de_hangup(inputs)
	if (locale === "fr") return fr_hangup(inputs)
	if (locale === "pl") return pl_hangup(inputs)
	if (locale === "hu") return hu_hangup(inputs)
	if (locale === "it") return it_hangup(inputs)
	if (locale === "nl") return nl_hangup(inputs)
	if (locale === "pt") return pt_hangup(inputs)
	if (locale === "da") return da_hangup(inputs)
	if (locale === "sl") return sl_hangup(inputs)
	if (locale === "hr") return hr_hangup(inputs)
	if (locale === "ro") return ro_hangup(inputs)
	if (locale === "sv") return sv_hangup(inputs)
	if (locale === "fi") return fi_hangup(inputs)
	return en_hangup(inputs)
});