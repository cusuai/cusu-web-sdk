/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Voice_UnavailableInputs */

const en_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voice calling is not available.`)
};

const cs_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hlasové volání není dostupné.`)
};

const sk_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hlasové volanie nie je dostupné.`)
};

const es_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las llamadas de voz no están disponibles.`)
};

const de_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprachanrufe sind nicht verfügbar.`)
};

/**
* | output |
* | --- |
* | "Voice calling is not available." |
*
* @param {Error_Voice_UnavailableInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const error_voice_unavailable = /** @type {((inputs?: Error_Voice_UnavailableInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Voice_UnavailableInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_voice_unavailable(inputs)
	if (locale === "sk") return sk_error_voice_unavailable(inputs)
	if (locale === "es") return es_error_voice_unavailable(inputs)
	if (locale === "de") return de_error_voice_unavailable(inputs)
	return en_error_voice_unavailable(inputs)
});