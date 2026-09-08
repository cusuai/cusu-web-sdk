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

/**
* | output |
* | --- |
* | "Assistant" |
*
* @param {Role_AssistantInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const role_assistant = /** @type {((inputs?: Role_AssistantInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_AssistantInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_role_assistant(inputs)
	if (locale === "sk") return sk_role_assistant(inputs)
	return en_role_assistant(inputs)
});