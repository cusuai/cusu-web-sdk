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

const sk_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent odpovedá`)
};

const es_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El asistente está respondiendo`)
};

const de_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Assistenz antwortet`)
};

/**
* | output |
* | --- |
* | "Assistant is answering" |
*
* @param {Call_PlayingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const call_playing = /** @type {((inputs?: Call_PlayingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_PlayingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_playing(inputs)
	if (locale === "sk") return sk_call_playing(inputs)
	if (locale === "es") return es_call_playing(inputs)
	if (locale === "de") return de_call_playing(inputs)
	return en_call_playing(inputs)
});