/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recency_TodayInputs */

const en_recency_today = /** @type {(inputs: Recency_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Today`)
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

/**
* | output |
* | --- |
* | "Today" |
*
* @param {Recency_TodayInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const recency_today = /** @type {((inputs?: Recency_TodayInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_TodayInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_today(inputs)
	if (locale === "sk") return sk_recency_today(inputs)
	if (locale === "es") return es_recency_today(inputs)
	if (locale === "de") return de_recency_today(inputs)
	return en_recency_today(inputs)
});