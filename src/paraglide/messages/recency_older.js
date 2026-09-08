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

const sk_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staršie`)
};

const es_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteriores`)
};

const de_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älter`)
};

/**
* | output |
* | --- |
* | "Older" |
*
* @param {Recency_OlderInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const recency_older = /** @type {((inputs?: Recency_OlderInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_OlderInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_older(inputs)
	if (locale === "sk") return sk_recency_older(inputs)
	if (locale === "es") return es_recency_older(inputs)
	if (locale === "de") return de_recency_older(inputs)
	return en_recency_older(inputs)
});