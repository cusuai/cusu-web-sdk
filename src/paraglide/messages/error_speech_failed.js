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

const es_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo reconocer la voz.`)
};

const de_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sprache konnte nicht erkannt werden.`)
};

const fr_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La parole n’a pas pu être reconnue.`)
};

const pl_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się rozpoznać mowy.`)
};

const hu_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nem sikerült felismerni a beszédet.`)
};

const it_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile riconoscere la voce.`)
};

const nl_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De spraak kon niet worden herkend.`)
};

const pt_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível reconhecer a fala.`)
};

const da_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Talen kunne ikke genkendes.`)
};

const sl_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Govora ni bilo mogoče prepoznati.`)
};

const hr_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Govor nije bilo moguće prepoznati.`)
};

const ro_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vocea nu a putut fi recunoscută.`)
};

const sv_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Talet kunde inte identifieras.`)
};

const fi_error_speech_failed = /** @type {(inputs: Error_Speech_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puhetta ei voitu tunnistaa.`)
};

/**
* | output |
* | --- |
* | "Could not recognize speech." |
*
* @param {Error_Speech_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_speech_failed = /** @type {((inputs?: Error_Speech_FailedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Speech_FailedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_speech_failed(inputs)
	if (locale === "sk") return sk_error_speech_failed(inputs)
	if (locale === "es") return es_error_speech_failed(inputs)
	if (locale === "de") return de_error_speech_failed(inputs)
	if (locale === "fr") return fr_error_speech_failed(inputs)
	if (locale === "pl") return pl_error_speech_failed(inputs)
	if (locale === "hu") return hu_error_speech_failed(inputs)
	if (locale === "it") return it_error_speech_failed(inputs)
	if (locale === "nl") return nl_error_speech_failed(inputs)
	if (locale === "pt") return pt_error_speech_failed(inputs)
	if (locale === "da") return da_error_speech_failed(inputs)
	if (locale === "sl") return sl_error_speech_failed(inputs)
	if (locale === "hr") return hr_error_speech_failed(inputs)
	if (locale === "ro") return ro_error_speech_failed(inputs)
	if (locale === "sv") return sv_error_speech_failed(inputs)
	if (locale === "fi") return fi_error_speech_failed(inputs)
	return en_error_speech_failed(inputs)
});