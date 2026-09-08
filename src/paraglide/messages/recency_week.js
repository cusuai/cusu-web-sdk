/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recency_WeekInputs */

const en_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This week`)
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

const nl_recency_week = /** @type {(inputs: Recency_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze week`)
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
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const recency_week = /** @type {((inputs?: Recency_WeekInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_WeekInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_week(inputs)
	if (locale === "sk") return sk_recency_week(inputs)
	if (locale === "es") return es_recency_week(inputs)
	if (locale === "de") return de_recency_week(inputs)
	if (locale === "fr") return fr_recency_week(inputs)
	if (locale === "pl") return pl_recency_week(inputs)
	if (locale === "hu") return hu_recency_week(inputs)
	if (locale === "it") return it_recency_week(inputs)
	if (locale === "nl") return nl_recency_week(inputs)
	if (locale === "pt") return pt_recency_week(inputs)
	if (locale === "da") return da_recency_week(inputs)
	if (locale === "sl") return sl_recency_week(inputs)
	if (locale === "hr") return hr_recency_week(inputs)
	if (locale === "ro") return ro_recency_week(inputs)
	if (locale === "sv") return sv_recency_week(inputs)
	if (locale === "fi") return fi_recency_week(inputs)
	return en_recency_week(inputs)
});