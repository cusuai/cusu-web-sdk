/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Recording_ShortInputs */

const en_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recording is too short.`)
};

const bg_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Записът е твърде кратък.`)
};

const cs_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nahrávka je příliš krátká.`)
};

const sk_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nahrávka je príliš krátka.`)
};

const es_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La grabación es demasiado corta.`)
};

const de_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Aufnahme ist zu kurz.`)
};

const et_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvestis on liiga lühike.`)
};

const fr_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’enregistrement est trop court.`)
};

const pl_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nagranie jest zbyt krótkie.`)
};

const hu_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A felvétel túl rövid.`)
};

const it_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La registrazione è troppo breve.`)
};

const lt_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Įrašas per trumpas.`)
};

const lv_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ieraksts ir pārāk īss.`)
};

const nl_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De opname is te kort.`)
};

const no_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opptaket er for kort.`)
};

const pt_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A gravação é demasiado curta.`)
};

const da_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optagelsen er for kort.`)
};

const sl_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posnetek je prekratek.`)
};

const hr_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snimka je prekratka.`)
};

const ro_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Înregistrarea este prea scurtă.`)
};

const sv_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inspelningen är för kort.`)
};

const fi_error_recording_short = /** @type {(inputs: Error_Recording_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tallenne on liian lyhyt.`)
};

/**
* | output |
* | --- |
* | "Recording is too short." |
*
* @param {Error_Recording_ShortInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_recording_short = /** @type {((inputs?: Error_Recording_ShortInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Recording_ShortInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_error_recording_short(inputs)
	if (locale === "cs") return cs_error_recording_short(inputs)
	if (locale === "sk") return sk_error_recording_short(inputs)
	if (locale === "es") return es_error_recording_short(inputs)
	if (locale === "de") return de_error_recording_short(inputs)
	if (locale === "et") return et_error_recording_short(inputs)
	if (locale === "fr") return fr_error_recording_short(inputs)
	if (locale === "pl") return pl_error_recording_short(inputs)
	if (locale === "hu") return hu_error_recording_short(inputs)
	if (locale === "it") return it_error_recording_short(inputs)
	if (locale === "lt") return lt_error_recording_short(inputs)
	if (locale === "lv") return lv_error_recording_short(inputs)
	if (locale === "nl") return nl_error_recording_short(inputs)
	if (locale === "no") return no_error_recording_short(inputs)
	if (locale === "pt") return pt_error_recording_short(inputs)
	if (locale === "da") return da_error_recording_short(inputs)
	if (locale === "sl") return sl_error_recording_short(inputs)
	if (locale === "hr") return hr_error_recording_short(inputs)
	if (locale === "ro") return ro_error_recording_short(inputs)
	if (locale === "sv") return sv_error_recording_short(inputs)
	if (locale === "fi") return fi_error_recording_short(inputs)
	return en_error_recording_short(inputs)
});