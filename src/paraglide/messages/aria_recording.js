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

/**
* | output |
* | --- |
* | "Recording" |
*
* @param {Aria_RecordingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_recording = /** @type {((inputs?: Aria_RecordingInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_RecordingInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_recording(inputs)
	return en_aria_recording(inputs)
});