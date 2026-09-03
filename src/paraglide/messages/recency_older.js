/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recency_OlderInputs */

const en_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Older`)
};

const cs_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starší`)
};

/**
* | output |
* | --- |
* | "Older" |
*
* @param {Recency_OlderInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const recency_older = /** @type {((inputs?: Recency_OlderInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_OlderInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_older(inputs)
	return en_recency_older(inputs)
});