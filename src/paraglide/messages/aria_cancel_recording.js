/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Cancel_RecordingInputs */

const en_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel recording`)
};

const cs_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zrušit nahrávání`)
};

const sk_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zrušiť nahrávanie`)
};

const es_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar grabación`)
};

const de_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufnahme abbrechen`)
};

const fr_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler l’enregistrement`)
};

const pl_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj nagrywanie`)
};

const hu_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Felvétel megszakítása`)
};

const it_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla registrazione`)
};

const nl_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opname annuleren`)
};

const pt_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar gravação`)
};

const da_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuller optagelse`)
};

const sl_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prekliči snemanje`)
};

const hr_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otkaži snimanje`)
};

const ro_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anulează înregistrarea`)
};

const sv_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt inspelning`)
};

const fi_aria_cancel_recording = /** @type {(inputs: Aria_Cancel_RecordingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peruuta tallennus`)
};

/**
* | output |
* | --- |
* | "Cancel recording" |
*
* @param {Aria_Cancel_RecordingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_cancel_recording = /** @type {((inputs?: Aria_Cancel_RecordingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Cancel_RecordingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_cancel_recording(inputs)
	if (locale === "sk") return sk_aria_cancel_recording(inputs)
	if (locale === "es") return es_aria_cancel_recording(inputs)
	if (locale === "de") return de_aria_cancel_recording(inputs)
	if (locale === "fr") return fr_aria_cancel_recording(inputs)
	if (locale === "pl") return pl_aria_cancel_recording(inputs)
	if (locale === "hu") return hu_aria_cancel_recording(inputs)
	if (locale === "it") return it_aria_cancel_recording(inputs)
	if (locale === "nl") return nl_aria_cancel_recording(inputs)
	if (locale === "pt") return pt_aria_cancel_recording(inputs)
	if (locale === "da") return da_aria_cancel_recording(inputs)
	if (locale === "sl") return sl_aria_cancel_recording(inputs)
	if (locale === "hr") return hr_aria_cancel_recording(inputs)
	if (locale === "ro") return ro_aria_cancel_recording(inputs)
	if (locale === "sv") return sv_aria_cancel_recording(inputs)
	if (locale === "fi") return fi_aria_cancel_recording(inputs)
	return en_aria_cancel_recording(inputs)
});