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

const sk_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mikrofón sa nepodarilo spustiť.`)
};

const es_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo iniciar el micrófono.`)
};

const de_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Mikrofon konnte nicht gestartet werden.`)
};

const fr_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le microphone n’a pas pu démarrer.`)
};

const pl_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się uruchomić mikrofonu.`)
};

const hu_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nem sikerült elindítani a mikrofont.`)
};

const it_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile avviare il microfono.`)
};

const nl_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De microfoon kon niet worden gestart.`)
};

const pt_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível iniciar o microfone.`)
};

const da_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mikrofonen kunne ikke startes.`)
};

const sl_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mikrofona ni bilo mogoče zagnati.`)
};

const hr_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mikrofon nije bilo moguće pokrenuti.`)
};

const ro_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Microfonul nu a putut fi pornit.`)
};

const sv_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mikrofonen kunde inte startas.`)
};

const fi_error_mic_failed = /** @type {(inputs: Error_Mic_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mikrofonia ei voitu käynnistää.`)
};

/**
* | output |
* | --- |
* | "Could not start the microphone." |
*
* @param {Error_Mic_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_mic_failed = /** @type {((inputs?: Error_Mic_FailedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Mic_FailedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_mic_failed(inputs)
	if (locale === "sk") return sk_error_mic_failed(inputs)
	if (locale === "es") return es_error_mic_failed(inputs)
	if (locale === "de") return de_error_mic_failed(inputs)
	if (locale === "fr") return fr_error_mic_failed(inputs)
	if (locale === "pl") return pl_error_mic_failed(inputs)
	if (locale === "hu") return hu_error_mic_failed(inputs)
	if (locale === "it") return it_error_mic_failed(inputs)
	if (locale === "nl") return nl_error_mic_failed(inputs)
	if (locale === "pt") return pt_error_mic_failed(inputs)
	if (locale === "da") return da_error_mic_failed(inputs)
	if (locale === "sl") return sl_error_mic_failed(inputs)
	if (locale === "hr") return hr_error_mic_failed(inputs)
	if (locale === "ro") return ro_error_mic_failed(inputs)
	if (locale === "sv") return sv_error_mic_failed(inputs)
	if (locale === "fi") return fi_error_mic_failed(inputs)
	return en_error_mic_failed(inputs)
});