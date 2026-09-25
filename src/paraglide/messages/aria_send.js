/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_SendInputs */

const en_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send`)
};

const bg_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изпращане`)
};

const cs_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odeslat`)
};

const sk_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odoslať`)
};

const es_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar`)
};

const de_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senden`)
};

const et_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saada`)
};

const fr_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer`)
};

const pl_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij`)
};

const hu_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küldés`)
};

const it_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia`)
};

const lt_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siųsti`)
};

const lv_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sūtīt`)
};

const nl_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzenden`)
};

const no_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send`)
};

const pt_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar`)
};

const da_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send`)
};

const sl_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pošlji`)
};

const hr_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pošalji`)
};

const sr_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pošaljite`)
};

const mk_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Испратете`)
};

const ro_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trimite`)
};

const sv_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka`)
};

const fi_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lähetä`)
};

/**
* | output |
* | --- |
* | "Send" |
*
* @param {Aria_SendInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_send = /** @type {((inputs?: Aria_SendInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_SendInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_send(inputs)
	if (locale === "cs") return cs_aria_send(inputs)
	if (locale === "sk") return sk_aria_send(inputs)
	if (locale === "es") return es_aria_send(inputs)
	if (locale === "de") return de_aria_send(inputs)
	if (locale === "et") return et_aria_send(inputs)
	if (locale === "fr") return fr_aria_send(inputs)
	if (locale === "pl") return pl_aria_send(inputs)
	if (locale === "hu") return hu_aria_send(inputs)
	if (locale === "it") return it_aria_send(inputs)
	if (locale === "lt") return lt_aria_send(inputs)
	if (locale === "lv") return lv_aria_send(inputs)
	if (locale === "nl") return nl_aria_send(inputs)
	if (locale === "no") return no_aria_send(inputs)
	if (locale === "pt") return pt_aria_send(inputs)
	if (locale === "da") return da_aria_send(inputs)
	if (locale === "sl") return sl_aria_send(inputs)
	if (locale === "hr") return hr_aria_send(inputs)
	if (locale === "sr") return sr_aria_send(inputs)
	if (locale === "mk") return mk_aria_send(inputs)
	if (locale === "ro") return ro_aria_send(inputs)
	if (locale === "sv") return sv_aria_send(inputs)
	if (locale === "fi") return fi_aria_send(inputs)
	return en_aria_send(inputs)
});