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

/**
* | output |
* | --- |
* | "Cancel recording" |
*
* @param {Aria_Cancel_RecordingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_cancel_recording = /** @type {((inputs?: Aria_Cancel_RecordingInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Cancel_RecordingInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_cancel_recording(inputs)
	if (locale === "sk") return sk_aria_cancel_recording(inputs)
	return en_aria_cancel_recording(inputs)
});