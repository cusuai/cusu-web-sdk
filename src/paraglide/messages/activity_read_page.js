/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_Read_PageInputs */

const en_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading a page…`)
};

const bg_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чета страница…`)
};

const cs_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Čtu stránku…`)
};

const sk_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Čítam stránku…`)
};

const es_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyendo una página…`)
};

const de_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lese eine Seite…`)
};

const et_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loen lehte…`)
};

const fr_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lecture d'une page…`)
};

const pl_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czytam stronę…`)
};

const hu_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldal olvasása…`)
};

const it_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggo una pagina…`)
};

const lt_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaitomas puslapis…`)
};

const lv_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lasa lapu…`)
};

const nl_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een pagina lezen…`)
};

const no_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leser en side…`)
};

const pt_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A ler uma página…`)
};

const da_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Læser en side…`)
};

const sl_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berem stran…`)
};

const hr_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Čitam stranicu…`)
};

const sr_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Čitam stranicu…`)
};

const mk_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читам страница…`)
};

const ro_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Citesc o pagină…`)
};

const sv_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser en sida…`)
};

const fi_activity_read_page = /** @type {(inputs: Activity_Read_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luen sivua…`)
};

/**
* | output |
* | --- |
* | "Reading a page…" |
*
* @param {Activity_Read_PageInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const activity_read_page = /** @type {((inputs?: Activity_Read_PageInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_Read_PageInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_activity_read_page(inputs)
	if (locale === "cs") return cs_activity_read_page(inputs)
	if (locale === "sk") return sk_activity_read_page(inputs)
	if (locale === "es") return es_activity_read_page(inputs)
	if (locale === "de") return de_activity_read_page(inputs)
	if (locale === "et") return et_activity_read_page(inputs)
	if (locale === "fr") return fr_activity_read_page(inputs)
	if (locale === "pl") return pl_activity_read_page(inputs)
	if (locale === "hu") return hu_activity_read_page(inputs)
	if (locale === "it") return it_activity_read_page(inputs)
	if (locale === "lt") return lt_activity_read_page(inputs)
	if (locale === "lv") return lv_activity_read_page(inputs)
	if (locale === "nl") return nl_activity_read_page(inputs)
	if (locale === "no") return no_activity_read_page(inputs)
	if (locale === "pt") return pt_activity_read_page(inputs)
	if (locale === "da") return da_activity_read_page(inputs)
	if (locale === "sl") return sl_activity_read_page(inputs)
	if (locale === "hr") return hr_activity_read_page(inputs)
	if (locale === "sr") return sr_activity_read_page(inputs)
	if (locale === "mk") return mk_activity_read_page(inputs)
	if (locale === "ro") return ro_activity_read_page(inputs)
	if (locale === "sv") return sv_activity_read_page(inputs)
	if (locale === "fi") return fi_activity_read_page(inputs)
	return en_activity_read_page(inputs)
});