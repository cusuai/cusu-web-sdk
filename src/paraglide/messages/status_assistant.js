/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_AssistantInputs */

const en_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Assistant`)
};

const cs_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI asistent`)
};

const sk_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI asistent`)
};

const es_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistente de IA`)
};

const de_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-Assistenz`)
};

const fr_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistant IA`)
};

const pl_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asystent AI`)
};

const hu_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI asszisztens`)
};

const it_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistente AI`)
};

const nl_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-assistent`)
};

const pt_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistente de IA`)
};

const da_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-assistent`)
};

const sl_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI asistent`)
};

const hr_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI asistent`)
};

const ro_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent AI`)
};

const sv_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-assistent`)
};

const fi_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-avustaja`)
};

/**
* | output |
* | --- |
* | "AI Assistant" |
*
* @param {Status_AssistantInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const status_assistant = /** @type {((inputs?: Status_AssistantInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_AssistantInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_assistant(inputs)
	if (locale === "sk") return sk_status_assistant(inputs)
	if (locale === "es") return es_status_assistant(inputs)
	if (locale === "de") return de_status_assistant(inputs)
	if (locale === "fr") return fr_status_assistant(inputs)
	if (locale === "pl") return pl_status_assistant(inputs)
	if (locale === "hu") return hu_status_assistant(inputs)
	if (locale === "it") return it_status_assistant(inputs)
	if (locale === "nl") return nl_status_assistant(inputs)
	if (locale === "pt") return pt_status_assistant(inputs)
	if (locale === "da") return da_status_assistant(inputs)
	if (locale === "sl") return sl_status_assistant(inputs)
	if (locale === "hr") return hr_status_assistant(inputs)
	if (locale === "ro") return ro_status_assistant(inputs)
	if (locale === "sv") return sv_status_assistant(inputs)
	if (locale === "fi") return fi_status_assistant(inputs)
	return en_status_assistant(inputs)
});