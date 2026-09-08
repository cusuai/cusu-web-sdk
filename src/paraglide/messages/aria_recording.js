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

/**
* | output |
* | --- |
* | "Recording" |
*
* @param {Aria_RecordingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_recording = /** @type {((inputs?: Aria_RecordingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_RecordingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_recording(inputs)
	if (locale === "sk") return sk_aria_recording(inputs)
	if (locale === "es") return es_aria_recording(inputs)
	if (locale === "de") return de_aria_recording(inputs)
	return en_aria_recording(inputs)
});