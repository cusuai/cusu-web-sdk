/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TypingInputs */

const en_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typing…`)
};

const bg_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пише…`)
};

const cs_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Píše…`)
};

const sk_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Píše…`)
};

const es_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribiendo…`)
};

const de_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreibt…`)
};

const et_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kirjutab…`)
};

const fr_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écriture en cours…`)
};

const pl_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pisze…`)
};

const hu_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gépel…`)
};

const it_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sta scrivendo…`)
};

const lt_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rašo…`)
};

const lv_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raksta…`)
};

const nl_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan het typen…`)
};

const no_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriver…`)
};

const pt_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A escrever…`)
};

const da_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriver…`)
};

const sl_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piše…`)
};

const hr_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piše…`)
};

const sr_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piše…`)
};

const mk_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пишува…`)
};

const ro_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrie…`)
};

const sv_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriver…`)
};

const fi_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kirjoittaa…`)
};

/**
* | output |
* | --- |
* | "Typing…" |
*
* @param {TypingInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const typing = /** @type {((inputs?: TypingInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TypingInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_typing(inputs)
	if (locale === "cs") return cs_typing(inputs)
	if (locale === "sk") return sk_typing(inputs)
	if (locale === "es") return es_typing(inputs)
	if (locale === "de") return de_typing(inputs)
	if (locale === "et") return et_typing(inputs)
	if (locale === "fr") return fr_typing(inputs)
	if (locale === "pl") return pl_typing(inputs)
	if (locale === "hu") return hu_typing(inputs)
	if (locale === "it") return it_typing(inputs)
	if (locale === "lt") return lt_typing(inputs)
	if (locale === "lv") return lv_typing(inputs)
	if (locale === "nl") return nl_typing(inputs)
	if (locale === "no") return no_typing(inputs)
	if (locale === "pt") return pt_typing(inputs)
	if (locale === "da") return da_typing(inputs)
	if (locale === "sl") return sl_typing(inputs)
	if (locale === "hr") return hr_typing(inputs)
	if (locale === "sr") return sr_typing(inputs)
	if (locale === "mk") return mk_typing(inputs)
	if (locale === "ro") return ro_typing(inputs)
	if (locale === "sv") return sv_typing(inputs)
	if (locale === "fi") return fi_typing(inputs)
	return en_typing(inputs)
});