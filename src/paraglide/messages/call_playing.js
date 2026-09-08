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

const fr_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’assistant répond`)
};

const pl_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asystent odpowiada`)
};

const hu_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Az asszisztens válaszol`)
};

const it_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’assistente sta rispondendo`)
};

const nl_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De assistent antwoordt`)
};

const pt_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O assistente está a responder`)
};

const da_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistenten svarer`)
};

const sl_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent odgovarja`)
};

const hr_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistent odgovara`)
};

const ro_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistentul răspunde`)
};

const sv_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistenten svarar`)
};

const fi_call_playing = /** @type {(inputs: Call_PlayingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avustaja vastaa`)
};

/**
* | output |
* | --- |
* | "Assistant is answering" |
*
* @param {Call_PlayingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const call_playing = /** @type {((inputs?: Call_PlayingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_PlayingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_playing(inputs)
	if (locale === "sk") return sk_call_playing(inputs)
	if (locale === "es") return es_call_playing(inputs)
	if (locale === "de") return de_call_playing(inputs)
	if (locale === "fr") return fr_call_playing(inputs)
	if (locale === "pl") return pl_call_playing(inputs)
	if (locale === "hu") return hu_call_playing(inputs)
	if (locale === "it") return it_call_playing(inputs)
	if (locale === "nl") return nl_call_playing(inputs)
	if (locale === "pt") return pt_call_playing(inputs)
	if (locale === "da") return da_call_playing(inputs)
	if (locale === "sl") return sl_call_playing(inputs)
	if (locale === "hr") return hr_call_playing(inputs)
	if (locale === "ro") return ro_call_playing(inputs)
	if (locale === "sv") return sv_call_playing(inputs)
	if (locale === "fi") return fi_call_playing(inputs)
	return en_call_playing(inputs)
});