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

/**
* | output |
* | --- |
* | "This week" |
*
* @param {Recency_WeekInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const recency_week = /** @type {((inputs?: Recency_WeekInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_WeekInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_week(inputs)
	return en_recency_week(inputs)
});