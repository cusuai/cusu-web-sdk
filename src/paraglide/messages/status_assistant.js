/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_AssistantInputs */

const en_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistant`)
};

const cs_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const sk_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const es_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistente`)
};

const de_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistenz`)
};

const fr_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistant`)
};

const pl_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asystent`)
};

const hu_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asszisztens`)
};

const it_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistente`)
};

const nl_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistent`)
};

const pt_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistente`)
};

const da_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistent`)
};

const sl_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const hr_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const ro_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const sv_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistent`)
};

const fi_status_assistant = /** @type {(inputs: Status_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avustaja`)
};

/**
* | output |
* | --- |
* | "Assistant" |
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