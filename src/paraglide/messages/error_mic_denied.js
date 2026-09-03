/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Mic_DeniedInputs */

const en_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allow microphone access.`)
};

const cs_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povolte přístup k mikrofonu.`)
};

/**
* | output |
* | --- |
* | "Allow microphone access." |
*
* @param {Error_Mic_DeniedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_mic_denied = /** @type {((inputs?: Error_Mic_DeniedInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Mic_DeniedInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_mic_denied(inputs)
	return en_error_mic_denied(inputs)
});