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

/**
* | output |
* | --- |
* | "Transcription failed." |
*
* @param {Error_Transcribe_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_transcribe_failed = /** @type {((inputs?: Error_Transcribe_FailedInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Transcribe_FailedInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_transcribe_failed(inputs)
	return en_error_transcribe_failed(inputs)
});