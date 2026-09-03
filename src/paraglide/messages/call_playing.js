/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_PlayingInputs */

const en_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistant is answering`)
};

const cs_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent odpovídá`)
};

/**
* | output |
* | --- |
* | "Assistant is answering" |
*
* @param {Call_PlayingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const call_playing = /** @type {((inputs?: Call_PlayingInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_PlayingInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_playing(inputs)
	return en_call_playing(inputs)
});