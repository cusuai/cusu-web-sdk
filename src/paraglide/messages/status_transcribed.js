/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_TranscribedInputs */

const en_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribed`)
};

const cs_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přepsáno`)
};

const sk_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepísané`)
};

const es_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcrito`)
};

const de_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribiert`)
};

const fr_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcrit`)
};

const pl_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkrybowano`)
};

const hu_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Átírva`)
};

const it_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascritto`)
};

const nl_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getranscribeerd`)
};

const pt_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcrito`)
};

const da_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transskriberet`)
};

const sl_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisano`)
};

const hr_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisano`)
};

const ro_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcris`)
};

const sv_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkriberat`)
};

const fi_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muunnettu tekstiksi`)
};

/**
* | output |
* | --- |
* | "Transcribed" |
*
* @param {Status_TranscribedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const status_transcribed = /** @type {((inputs?: Status_TranscribedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_TranscribedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_transcribed(inputs)
	if (locale === "sk") return sk_status_transcribed(inputs)
	if (locale === "es") return es_status_transcribed(inputs)
	if (locale === "de") return de_status_transcribed(inputs)
	if (locale === "fr") return fr_status_transcribed(inputs)
	if (locale === "pl") return pl_status_transcribed(inputs)
	if (locale === "hu") return hu_status_transcribed(inputs)
	if (locale === "it") return it_status_transcribed(inputs)
	if (locale === "nl") return nl_status_transcribed(inputs)
	if (locale === "pt") return pt_status_transcribed(inputs)
	if (locale === "da") return da_status_transcribed(inputs)
	if (locale === "sl") return sl_status_transcribed(inputs)
	if (locale === "hr") return hr_status_transcribed(inputs)
	if (locale === "ro") return ro_status_transcribed(inputs)
	if (locale === "sv") return sv_status_transcribed(inputs)
	if (locale === "fi") return fi_status_transcribed(inputs)
	return en_status_transcribed(inputs)
});