/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_TranscribingInputs */

const en_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribing what you said…`)
};

const cs_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přepisuji, co jste řekli…`)
};

/**
* | output |
* | --- |
* | "Transcribing what you said…" |
*
* @param {Call_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const call_transcribing = /** @type {((inputs?: Call_TranscribingInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_TranscribingInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_transcribing(inputs)
	return en_call_transcribing(inputs)
});