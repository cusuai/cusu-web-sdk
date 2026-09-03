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

/**
* | output |
* | --- |
* | "Today" |
*
* @param {Recency_TodayInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const recency_today = /** @type {((inputs?: Recency_TodayInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_TodayInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_today(inputs)
	return en_recency_today(inputs)
});