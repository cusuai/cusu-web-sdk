/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Dictation_UnavailableInputs */

const en_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dictation is not available in this browser.`)
};

const cs_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktování v tomto prohlížeči není dostupné.`)
};

const sk_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktovanie nie je v tomto prehliadači dostupné.`)
};

/**
* | output |
* | --- |
* | "Dictation is not available in this browser." |
*
* @param {Error_Dictation_UnavailableInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_dictation_unavailable = /** @type {((inputs?: Error_Dictation_UnavailableInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Dictation_UnavailableInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_dictation_unavailable(inputs)
	if (locale === "sk") return sk_error_dictation_unavailable(inputs)
	return en_error_dictation_unavailable(inputs)
});