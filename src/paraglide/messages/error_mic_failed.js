/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Mic_FailedInputs */

const en_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not start the microphone.`)
};

const cs_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mikrofon se nepodařilo spustit.`)
};

/**
* | output |
* | --- |
* | "Could not start the microphone." |
*
* @param {Error_Mic_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_mic_failed = /** @type {((inputs?: Error_Mic_FailedInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Mic_FailedInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_mic_failed(inputs)
	return en_error_mic_failed(inputs)
});