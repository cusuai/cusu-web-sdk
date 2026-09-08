/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Transcribe_FailedInputs */

const en_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcription failed.`)
};

const cs_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přepis se nepovedl.`)
};

const sk_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepis sa nepodaril.`)
};

/**
* | output |
* | --- |
* | "Transcription failed." |
*
* @param {Error_Transcribe_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_transcribe_failed = /** @type {((inputs?: Error_Transcribe_FailedInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Transcribe_FailedInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_transcribe_failed(inputs)
	if (locale === "sk") return sk_error_transcribe_failed(inputs)
	return en_error_transcribe_failed(inputs)
});