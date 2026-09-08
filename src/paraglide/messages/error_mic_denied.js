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

const sk_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povoľte prístup k mikrofónu.`)
};

/**
* | output |
* | --- |
* | "Allow microphone access." |
*
* @param {Error_Mic_DeniedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_mic_denied = /** @type {((inputs?: Error_Mic_DeniedInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Mic_DeniedInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_mic_denied(inputs)
	if (locale === "sk") return sk_error_mic_denied(inputs)
	return en_error_mic_denied(inputs)
});