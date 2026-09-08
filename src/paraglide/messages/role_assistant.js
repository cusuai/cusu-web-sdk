/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Role_AssistantInputs */

const en_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistant`)
};

const cs_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const sk_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const es_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistente`)
};

const de_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistenz`)
};

const fr_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistant`)
};

const pl_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asystent`)
};

const hu_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asszisztens`)
};

const it_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistente`)
};

const nl_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistent`)
};

const pt_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistente`)
};

const da_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistent`)
};

const sl_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const hr_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const ro_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent`)
};

const sv_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistent`)
};

const fi_role_assistant = /** @type {(inputs: Role_AssistantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avustaja`)
};

/**
* | output |
* | --- |
* | "Assistant" |
*
* @param {Role_AssistantInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const role_assistant = /** @type {((inputs?: Role_AssistantInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_AssistantInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_role_assistant(inputs)
	if (locale === "sk") return sk_role_assistant(inputs)
	if (locale === "es") return es_role_assistant(inputs)
	if (locale === "de") return de_role_assistant(inputs)
	if (locale === "fr") return fr_role_assistant(inputs)
	if (locale === "pl") return pl_role_assistant(inputs)
	if (locale === "hu") return hu_role_assistant(inputs)
	if (locale === "it") return it_role_assistant(inputs)
	if (locale === "nl") return nl_role_assistant(inputs)
	if (locale === "pt") return pt_role_assistant(inputs)
	if (locale === "da") return da_role_assistant(inputs)
	if (locale === "sl") return sl_role_assistant(inputs)
	if (locale === "hr") return hr_role_assistant(inputs)
	if (locale === "ro") return ro_role_assistant(inputs)
	if (locale === "sv") return sv_role_assistant(inputs)
	if (locale === "fi") return fi_role_assistant(inputs)
	return en_role_assistant(inputs)
});