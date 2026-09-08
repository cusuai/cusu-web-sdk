/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Recording_ShortInputs */

const en_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recording is too short.`)
};

const cs_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nahrávka je příliš krátká.`)
};

const sk_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nahrávka je príliš krátka.`)
};

const es_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La grabación es demasiado corta.`)
};

const de_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Aufnahme ist zu kurz.`)
};

/**
* | output |
* | --- |
* | "Recording is too short." |
*
* @param {Error_Recording_ShortInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const error_recording_short = /** @type {((inputs?: Error_Recording_ShortInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Recording_ShortInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_recording_short(inputs)
	if (locale === "sk") return sk_error_recording_short(inputs)
	if (locale === "es") return es_error_recording_short(inputs)
	if (locale === "de") return de_error_recording_short(inputs)
	return en_error_recording_short(inputs)
});