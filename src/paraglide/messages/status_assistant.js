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

/**
* | output |
* | --- |
* | "Assistant" |
*
* @param {Status_AssistantInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const status_assistant = /** @type {((inputs?: Status_AssistantInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_AssistantInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_assistant(inputs)
	if (locale === "sk") return sk_status_assistant(inputs)
	return en_status_assistant(inputs)
});