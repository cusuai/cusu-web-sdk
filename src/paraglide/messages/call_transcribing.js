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

const sk_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisujem, čo ste povedali…`)
};

const es_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribiendo lo que has dicho…`)
};

const de_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ihre Worte werden transkribiert…`)
};

const fr_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcription de vos paroles…`)
};

const pl_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkrybuję Twoją wypowiedź…`)
};

const hu_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Az elhangzottak átírása…`)
};

const it_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascrizione di ciò che hai detto…`)
};

const nl_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcriberen wat je zei…`)
};

const pt_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A transcrever o que disseste…`)
};

const da_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transskriberer det, du sagde…`)
};

const sl_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisujem, kar ste povedali…`)
};

const hr_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisujem ono što ste rekli…`)
};

const ro_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcriu ceea ce ați spus…`)
};

const sv_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkriberar det du sa…`)
};

const fi_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muunnetaan sanomaasi tekstiksi…`)
};

/**
* | output |
* | --- |
* | "Transcribing what you said…" |
*
* @param {Call_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const call_transcribing = /** @type {((inputs?: Call_TranscribingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_TranscribingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_transcribing(inputs)
	if (locale === "sk") return sk_call_transcribing(inputs)
	if (locale === "es") return es_call_transcribing(inputs)
	if (locale === "de") return de_call_transcribing(inputs)
	if (locale === "fr") return fr_call_transcribing(inputs)
	if (locale === "pl") return pl_call_transcribing(inputs)
	if (locale === "hu") return hu_call_transcribing(inputs)
	if (locale === "it") return it_call_transcribing(inputs)
	if (locale === "nl") return nl_call_transcribing(inputs)
	if (locale === "pt") return pt_call_transcribing(inputs)
	if (locale === "da") return da_call_transcribing(inputs)
	if (locale === "sl") return sl_call_transcribing(inputs)
	if (locale === "hr") return hr_call_transcribing(inputs)
	if (locale === "ro") return ro_call_transcribing(inputs)
	if (locale === "sv") return sv_call_transcribing(inputs)
	if (locale === "fi") return fi_call_transcribing(inputs)
	return en_call_transcribing(inputs)
});