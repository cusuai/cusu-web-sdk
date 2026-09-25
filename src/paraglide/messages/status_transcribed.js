/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_TranscribedInputs */

const en_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribed`)
};

const bg_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Транскрибирано`)
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

const et_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribeeritud`)
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

const lt_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribuota`)
};

const lv_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribēts`)
};

const nl_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getranscribeerd`)
};

const no_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribert`)
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

const sr_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribovano`)
};

const mk_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Транскрибирано`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const status_transcribed = /** @type {((inputs?: Status_TranscribedInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_TranscribedInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_status_transcribed(inputs)
	if (locale === "cs") return cs_status_transcribed(inputs)
	if (locale === "sk") return sk_status_transcribed(inputs)
	if (locale === "es") return es_status_transcribed(inputs)
	if (locale === "de") return de_status_transcribed(inputs)
	if (locale === "et") return et_status_transcribed(inputs)
	if (locale === "fr") return fr_status_transcribed(inputs)
	if (locale === "pl") return pl_status_transcribed(inputs)
	if (locale === "hu") return hu_status_transcribed(inputs)
	if (locale === "it") return it_status_transcribed(inputs)
	if (locale === "lt") return lt_status_transcribed(inputs)
	if (locale === "lv") return lv_status_transcribed(inputs)
	if (locale === "nl") return nl_status_transcribed(inputs)
	if (locale === "no") return no_status_transcribed(inputs)
	if (locale === "pt") return pt_status_transcribed(inputs)
	if (locale === "da") return da_status_transcribed(inputs)
	if (locale === "sl") return sl_status_transcribed(inputs)
	if (locale === "hr") return hr_status_transcribed(inputs)
	if (locale === "sr") return sr_status_transcribed(inputs)
	if (locale === "mk") return mk_status_transcribed(inputs)
	if (locale === "ro") return ro_status_transcribed(inputs)
	if (locale === "sv") return sv_status_transcribed(inputs)
	if (locale === "fi") return fi_status_transcribed(inputs)
	return en_status_transcribed(inputs)
});