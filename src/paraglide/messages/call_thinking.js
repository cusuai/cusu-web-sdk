/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_ThinkingInputs */

const en_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thinking`)
};

const cs_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přemýšlím`)
};

const sk_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premýšľam`)
};

const es_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensando`)
};

const de_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denkt nach`)
};

const fr_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réflexion en cours`)
};

const pl_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Myślę`)
};

const hu_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gondolkodom`)
};

const it_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sto pensando`)
};

const nl_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan het nadenken`)
};

const pt_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A pensar`)
};

const da_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tænker`)
};

const sl_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razmišljam`)
};

const hr_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razmišljam`)
};

const ro_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mă gândesc`)
};

const sv_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tänker`)
};

const fi_call_thinking = /** @type {(inputs: Call_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mietin`)
};

/**
* | output |
* | --- |
* | "Thinking" |
*
* @param {Call_ThinkingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const call_thinking = /** @type {((inputs?: Call_ThinkingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_ThinkingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_thinking(inputs)
	if (locale === "sk") return sk_call_thinking(inputs)
	if (locale === "es") return es_call_thinking(inputs)
	if (locale === "de") return de_call_thinking(inputs)
	if (locale === "fr") return fr_call_thinking(inputs)
	if (locale === "pl") return pl_call_thinking(inputs)
	if (locale === "hu") return hu_call_thinking(inputs)
	if (locale === "it") return it_call_thinking(inputs)
	if (locale === "nl") return nl_call_thinking(inputs)
	if (locale === "pt") return pt_call_thinking(inputs)
	if (locale === "da") return da_call_thinking(inputs)
	if (locale === "sl") return sl_call_thinking(inputs)
	if (locale === "hr") return hr_call_thinking(inputs)
	if (locale === "ro") return ro_call_thinking(inputs)
	if (locale === "sv") return sv_call_thinking(inputs)
	if (locale === "fi") return fi_call_thinking(inputs)
	return en_call_thinking(inputs)
});