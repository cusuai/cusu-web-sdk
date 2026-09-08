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

/**
* | output |
* | --- |
* | "This week" |
*
* @param {Recency_WeekInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const recency_week = /** @type {((inputs?: Recency_WeekInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_WeekInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_week(inputs)
	if (locale === "sk") return sk_recency_week(inputs)
	if (locale === "es") return es_recency_week(inputs)
	if (locale === "de") return de_recency_week(inputs)
	return en_recency_week(inputs)
});