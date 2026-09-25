/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Voice_PlaybackInputs */

const en_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not play voice.`)
};

const bg_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Звукът не можа да бъде възпроизведен.`)
};

const cs_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hlas se nepodařilo přehrát.`)
};

const sk_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hlas sa nepodarilo prehrať.`)
};

const es_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo reproducir la voz.`)
};

const de_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sprachausgabe konnte nicht wiedergegeben werden.`)
};

const et_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heli ei õnnestunud esitada.`)
};

const fr_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La voix n’a pas pu être lue.`)
};

const pl_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odtworzyć głosu.`)
};

const hu_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nem sikerült lejátszani a hangot.`)
};

const it_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile riprodurre la voce.`)
};

const lt_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nepavyko paleisti garso.`)
};

const lv_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neizdevās atskaņot audio.`)
};

const nl_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De stem kon niet worden afgespeeld.`)
};

const no_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunne ikke spille av lyd.`)
};

const pt_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível reproduzir a voz.`)
};

const da_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen kunne ikke afspilles.`)
};

const sl_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glasu ni bilo mogoče predvajati.`)
};

const hr_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glas nije bilo moguće reproducirati.`)
};

const sr_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nije moguće reprodukovati zvuk.`)
};

const mk_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Звукот не може да се репродуцира.`)
};

const ro_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vocea nu a putut fi redată.`)
};

const sv_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösten kunde inte spelas upp.`)
};

const fi_error_voice_playback = /** @type {(inputs: Error_Voice_PlaybackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ääntä ei voitu toistaa.`)
};

/**
* | output |
* | --- |
* | "Could not play voice." |
*
* @param {Error_Voice_PlaybackInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_voice_playback = /** @type {((inputs?: Error_Voice_PlaybackInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Voice_PlaybackInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_error_voice_playback(inputs)
	if (locale === "cs") return cs_error_voice_playback(inputs)
	if (locale === "sk") return sk_error_voice_playback(inputs)
	if (locale === "es") return es_error_voice_playback(inputs)
	if (locale === "de") return de_error_voice_playback(inputs)
	if (locale === "et") return et_error_voice_playback(inputs)
	if (locale === "fr") return fr_error_voice_playback(inputs)
	if (locale === "pl") return pl_error_voice_playback(inputs)
	if (locale === "hu") return hu_error_voice_playback(inputs)
	if (locale === "it") return it_error_voice_playback(inputs)
	if (locale === "lt") return lt_error_voice_playback(inputs)
	if (locale === "lv") return lv_error_voice_playback(inputs)
	if (locale === "nl") return nl_error_voice_playback(inputs)
	if (locale === "no") return no_error_voice_playback(inputs)
	if (locale === "pt") return pt_error_voice_playback(inputs)
	if (locale === "da") return da_error_voice_playback(inputs)
	if (locale === "sl") return sl_error_voice_playback(inputs)
	if (locale === "hr") return hr_error_voice_playback(inputs)
	if (locale === "sr") return sr_error_voice_playback(inputs)
	if (locale === "mk") return mk_error_voice_playback(inputs)
	if (locale === "ro") return ro_error_voice_playback(inputs)
	if (locale === "sv") return sv_error_voice_playback(inputs)
	if (locale === "fi") return fi_error_voice_playback(inputs)
	return en_error_voice_playback(inputs)
});