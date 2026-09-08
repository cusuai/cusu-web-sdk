/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_RecordingInputs */

const en_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recording`)
};

const cs_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nahrávám`)
};

const sk_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nahrávam`)
};

const es_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grabando`)
};

const de_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufnahme läuft`)
};

const fr_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement en cours`)
};

const pl_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nagrywanie`)
};

const hu_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Felvétel folyamatban`)
};

const it_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrazione in corso`)
};

const nl_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opname bezig`)
};

const pt_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A gravar`)
};

const da_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optager`)
};

const sl_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snemanje`)
};

const hr_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snimanje`)
};

const ro_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Înregistrare`)
};

const sv_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelar in`)
};

const fi_aria_recording = /** @type {(inputs: Aria_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tallennetaan`)
};

/**
* | output |
* | --- |
* | "Recording" |
*
* @param {Aria_RecordingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_recording = /** @type {((inputs?: Aria_RecordingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_RecordingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_recording(inputs)
	if (locale === "sk") return sk_aria_recording(inputs)
	if (locale === "es") return es_aria_recording(inputs)
	if (locale === "de") return de_aria_recording(inputs)
	if (locale === "fr") return fr_aria_recording(inputs)
	if (locale === "pl") return pl_aria_recording(inputs)
	if (locale === "hu") return hu_aria_recording(inputs)
	if (locale === "it") return it_aria_recording(inputs)
	if (locale === "nl") return nl_aria_recording(inputs)
	if (locale === "pt") return pt_aria_recording(inputs)
	if (locale === "da") return da_aria_recording(inputs)
	if (locale === "sl") return sl_aria_recording(inputs)
	if (locale === "hr") return hr_aria_recording(inputs)
	if (locale === "ro") return ro_aria_recording(inputs)
	if (locale === "sv") return sv_aria_recording(inputs)
	if (locale === "fi") return fi_aria_recording(inputs)
	return en_aria_recording(inputs)
});