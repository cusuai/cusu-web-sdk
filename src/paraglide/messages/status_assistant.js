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

/**
* | output |
* | --- |
* | "Assistant" |
*
* @param {Status_AssistantInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const status_assistant = /** @type {((inputs?: Status_AssistantInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_AssistantInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_assistant(inputs)
	if (locale === "sk") return sk_status_assistant(inputs)
	if (locale === "es") return es_status_assistant(inputs)
	if (locale === "de") return de_status_assistant(inputs)
	return en_status_assistant(inputs)
});