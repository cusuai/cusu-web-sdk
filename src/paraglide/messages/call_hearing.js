/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_HearingInputs */

const en_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I can hear you`)
};

const cs_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slyším vás`)
};

const sk_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Počujem vás`)
};

const es_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te oigo`)
};

const de_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich kann Sie hören`)
};

const fr_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je vous entends`)
};

const pl_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Słyszę Cię`)
};

const hu_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hallom Önt`)
};

const it_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ti sento`)
};

const nl_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik kan je horen`)
};

const pt_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consigo ouvir-te`)
};

const da_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeg kan høre dig`)
};

const sl_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slišim vas`)
};

const hr_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Čujem vas`)
};

const ro_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vă aud`)
};

const sv_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag hör dig`)
};

const fi_call_hearing = /** @type {(inputs: Call_HearingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuulen sinut`)
};

/**
* | output |
* | --- |
* | "I can hear you" |
*
* @param {Call_HearingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const call_hearing = /** @type {((inputs?: Call_HearingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_HearingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_hearing(inputs)
	if (locale === "sk") return sk_call_hearing(inputs)
	if (locale === "es") return es_call_hearing(inputs)
	if (locale === "de") return de_call_hearing(inputs)
	if (locale === "fr") return fr_call_hearing(inputs)
	if (locale === "pl") return pl_call_hearing(inputs)
	if (locale === "hu") return hu_call_hearing(inputs)
	if (locale === "it") return it_call_hearing(inputs)
	if (locale === "nl") return nl_call_hearing(inputs)
	if (locale === "pt") return pt_call_hearing(inputs)
	if (locale === "da") return da_call_hearing(inputs)
	if (locale === "sl") return sl_call_hearing(inputs)
	if (locale === "hr") return hr_call_hearing(inputs)
	if (locale === "ro") return ro_call_hearing(inputs)
	if (locale === "sv") return sv_call_hearing(inputs)
	if (locale === "fi") return fi_call_hearing(inputs)
	return en_call_hearing(inputs)
});