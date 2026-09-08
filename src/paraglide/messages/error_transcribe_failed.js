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

const es_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo transcribir.`)
};

const de_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Transkription ist fehlgeschlagen.`)
};

const fr_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La transcription a échoué.`)
};

const pl_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkrypcja nie powiodła się.`)
};

const hu_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Az átírás nem sikerült.`)
};

const it_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La trascrizione non è riuscita.`)
};

const nl_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcriberen is mislukt.`)
};

const pt_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A transcrição falhou.`)
};

const da_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transskriptionen mislykkedes.`)
};

const sl_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisovanje ni uspelo.`)
};

const hr_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisivanje nije uspjelo.`)
};

const ro_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcrierea a eșuat.`)
};

const sv_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkriberingen misslyckades.`)
};

const fi_error_transcribe_failed = /** @type {(inputs: Error_Transcribe_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekstiksi muuntaminen epäonnistui.`)
};

/**
* | output |
* | --- |
* | "Transcription failed." |
*
* @param {Error_Transcribe_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_transcribe_failed = /** @type {((inputs?: Error_Transcribe_FailedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Transcribe_FailedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_transcribe_failed(inputs)
	if (locale === "sk") return sk_error_transcribe_failed(inputs)
	if (locale === "es") return es_error_transcribe_failed(inputs)
	if (locale === "de") return de_error_transcribe_failed(inputs)
	if (locale === "fr") return fr_error_transcribe_failed(inputs)
	if (locale === "pl") return pl_error_transcribe_failed(inputs)
	if (locale === "hu") return hu_error_transcribe_failed(inputs)
	if (locale === "it") return it_error_transcribe_failed(inputs)
	if (locale === "nl") return nl_error_transcribe_failed(inputs)
	if (locale === "pt") return pt_error_transcribe_failed(inputs)
	if (locale === "da") return da_error_transcribe_failed(inputs)
	if (locale === "sl") return sl_error_transcribe_failed(inputs)
	if (locale === "hr") return hr_error_transcribe_failed(inputs)
	if (locale === "ro") return ro_error_transcribe_failed(inputs)
	if (locale === "sv") return sv_error_transcribe_failed(inputs)
	if (locale === "fi") return fi_error_transcribe_failed(inputs)
	return en_error_transcribe_failed(inputs)
});