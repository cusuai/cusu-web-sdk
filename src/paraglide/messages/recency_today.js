/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recency_TodayInputs */

const en_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Today`)
};

const bg_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Днес`)
};

const cs_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dnes`)
};

const sk_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dnes`)
};

const es_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoy`)
};

const de_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heute`)
};

const et_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Täna`)
};

const fr_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aujourd’hui`)
};

const pl_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzisiaj`)
};

const hu_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ma`)
};

const it_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oggi`)
};

const lt_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Šiandien`)
};

const lv_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Šodien`)
};

const nl_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vandaag`)
};

const no_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I dag`)
};

const pt_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoje`)
};

const da_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I dag`)
};

const sl_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danes`)
};

const hr_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danas`)
};

const sr_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danas`)
};

const mk_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Денес`)
};

const ro_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Astăzi`)
};

const sv_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idag`)
};

const fi_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tänään`)
};

/**
* | output |
* | --- |
* | "Today" |
*
* @param {Recency_TodayInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const recency_today = /** @type {((inputs?: Recency_TodayInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_TodayInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_recency_today(inputs)
	if (locale === "cs") return cs_recency_today(inputs)
	if (locale === "sk") return sk_recency_today(inputs)
	if (locale === "es") return es_recency_today(inputs)
	if (locale === "de") return de_recency_today(inputs)
	if (locale === "et") return et_recency_today(inputs)
	if (locale === "fr") return fr_recency_today(inputs)
	if (locale === "pl") return pl_recency_today(inputs)
	if (locale === "hu") return hu_recency_today(inputs)
	if (locale === "it") return it_recency_today(inputs)
	if (locale === "lt") return lt_recency_today(inputs)
	if (locale === "lv") return lv_recency_today(inputs)
	if (locale === "nl") return nl_recency_today(inputs)
	if (locale === "no") return no_recency_today(inputs)
	if (locale === "pt") return pt_recency_today(inputs)
	if (locale === "da") return da_recency_today(inputs)
	if (locale === "sl") return sl_recency_today(inputs)
	if (locale === "hr") return hr_recency_today(inputs)
	if (locale === "sr") return sr_recency_today(inputs)
	if (locale === "mk") return mk_recency_today(inputs)
	if (locale === "ro") return ro_recency_today(inputs)
	if (locale === "sv") return sv_recency_today(inputs)
	if (locale === "fi") return fi_recency_today(inputs)
	return en_recency_today(inputs)
});