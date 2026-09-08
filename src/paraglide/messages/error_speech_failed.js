/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Speech_FailedInputs */

const en_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not recognize speech.`)
};

const cs_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nepodařilo se rozpoznat řeč.`)
};

const sk_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nepodarilo sa rozpoznať reč.`)
};

/**
* | output |
* | --- |
* | "Could not recognize speech." |
*
* @param {Error_Speech_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_speech_failed = /** @type {((inputs?: Error_Speech_FailedInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Speech_FailedInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_speech_failed(inputs)
	if (locale === "sk") return sk_error_speech_failed(inputs)
	return en_error_speech_failed(inputs)
});