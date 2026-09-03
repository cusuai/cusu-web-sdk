/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Voice_PlaybackInputs */

const en_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not play voice.`)
};

const cs_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hlas se nepodařilo přehrát.`)
};

/**
* | output |
* | --- |
* | "Could not play voice." |
*
* @param {Error_Voice_PlaybackInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_voice_playback = /** @type {((inputs?: Error_Voice_PlaybackInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Voice_PlaybackInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_voice_playback(inputs)
	return en_error_voice_playback(inputs)
});