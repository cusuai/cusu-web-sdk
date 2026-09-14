/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recency_WeekInputs */

const en_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This week`)
};

const bg_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тази седмица`)
};

const cs_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tento týden`)
};

const sk_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tento týždeň`)
};

const es_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta semana`)
};

const de_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Woche`)
};

const et_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sel nädalal`)
};

const fr_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette semaine`)
};

const pl_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tym tygodniu`)
};

const hu_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ezen a héten`)
};

const it_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa settimana`)
};

const lt_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Šią savaitę`)
};

const lv_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Šonedēļ`)
};

const nl_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze week`)
};

const no_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denne uken`)
};

const pt_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta semana`)
};

const da_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denne uge`)
};

const sl_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta teden`)
};

const hr_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ovaj tjedan`)
};

const ro_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Săptămâna aceasta`)
};

const sv_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här veckan`)
};

const fi_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tällä viikolla`)
};

/**
* | output |
* | --- |
* | "This week" |
*
* @param {Recency_WeekInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const recency_week = /** @type {((inputs?: Recency_WeekInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_WeekInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_recency_week(inputs)
	if (locale === "cs") return cs_recency_week(inputs)
	if (locale === "sk") return sk_recency_week(inputs)
	if (locale === "es") return es_recency_week(inputs)
	if (locale === "de") return de_recency_week(inputs)
	if (locale === "et") return et_recency_week(inputs)
	if (locale === "fr") return fr_recency_week(inputs)
	if (locale === "pl") return pl_recency_week(inputs)
	if (locale === "hu") return hu_recency_week(inputs)
	if (locale === "it") return it_recency_week(inputs)
	if (locale === "lt") return lt_recency_week(inputs)
	if (locale === "lv") return lv_recency_week(inputs)
	if (locale === "nl") return nl_recency_week(inputs)
	if (locale === "no") return no_recency_week(inputs)
	if (locale === "pt") return pt_recency_week(inputs)
	if (locale === "da") return da_recency_week(inputs)
	if (locale === "sl") return sl_recency_week(inputs)
	if (locale === "hr") return hr_recency_week(inputs)
	if (locale === "ro") return ro_recency_week(inputs)
	if (locale === "sv") return sv_recency_week(inputs)
	if (locale === "fi") return fi_recency_week(inputs)
	return en_recency_week(inputs)
});