/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recency_YesterdayInputs */

const en_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yesterday`)
};

const cs_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Včera`)
};

const sk_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Včera`)
};

/**
* | output |
* | --- |
* | "Yesterday" |
*
* @param {Recency_YesterdayInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const recency_yesterday = /** @type {((inputs?: Recency_YesterdayInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_YesterdayInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_yesterday(inputs)
	if (locale === "sk") return sk_recency_yesterday(inputs)
	return en_recency_yesterday(inputs)
});