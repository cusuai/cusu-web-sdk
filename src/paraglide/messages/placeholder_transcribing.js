/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Placeholder_TranscribingInputs */

const en_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribing…`)
};

const bg_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Транскрибиране…`)
};

const cs_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přepisuji…`)
};

const sk_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisujem…`)
};

const es_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribiendo…`)
};

const de_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird transkribiert…`)
};

const et_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribeerimine…`)
};

const fr_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcription en cours…`)
};

const pl_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkrypcja…`)
};

const hu_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Átírás folyamatban…`)
};

const it_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascrizione in corso…`)
};

const lt_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkribuojama…`)
};

const lv_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiek transkribēšana…`)
};

const nl_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcriberen…`)
};

const no_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkriberer…`)
};

const pt_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A transcrever…`)
};

const da_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transskriberer…`)
};

const sl_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisovanje…`)
};

const hr_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisivanje…`)
};

const ro_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se transcrie…`)
};

const sv_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transkriberar…`)
};

const fi_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muunnetaan tekstiksi…`)
};

/**
* | output |
* | --- |
* | "Transcribing…" |
*
* @param {Placeholder_TranscribingInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const placeholder_transcribing = /** @type {((inputs?: Placeholder_TranscribingInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Placeholder_TranscribingInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_placeholder_transcribing(inputs)
	if (locale === "cs") return cs_placeholder_transcribing(inputs)
	if (locale === "sk") return sk_placeholder_transcribing(inputs)
	if (locale === "es") return es_placeholder_transcribing(inputs)
	if (locale === "de") return de_placeholder_transcribing(inputs)
	if (locale === "et") return et_placeholder_transcribing(inputs)
	if (locale === "fr") return fr_placeholder_transcribing(inputs)
	if (locale === "pl") return pl_placeholder_transcribing(inputs)
	if (locale === "hu") return hu_placeholder_transcribing(inputs)
	if (locale === "it") return it_placeholder_transcribing(inputs)
	if (locale === "lt") return lt_placeholder_transcribing(inputs)
	if (locale === "lv") return lv_placeholder_transcribing(inputs)
	if (locale === "nl") return nl_placeholder_transcribing(inputs)
	if (locale === "no") return no_placeholder_transcribing(inputs)
	if (locale === "pt") return pt_placeholder_transcribing(inputs)
	if (locale === "da") return da_placeholder_transcribing(inputs)
	if (locale === "sl") return sl_placeholder_transcribing(inputs)
	if (locale === "hr") return hr_placeholder_transcribing(inputs)
	if (locale === "ro") return ro_placeholder_transcribing(inputs)
	if (locale === "sv") return sv_placeholder_transcribing(inputs)
	if (locale === "fi") return fi_placeholder_transcribing(inputs)
	return en_placeholder_transcribing(inputs)
});