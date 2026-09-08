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

const es_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayer`)
};

const de_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestern`)
};

const fr_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier`)
};

const pl_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczoraj`)
};

const hu_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tegnap`)
};

const it_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ieri`)
};

const nl_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gisteren`)
};

const pt_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontem`)
};

const da_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I går`)
};

const sl_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Včeraj`)
};

const hr_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jučer`)
};

const ro_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ieri`)
};

const sv_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Igår`)
};

const fi_recency_yesterday = /** @type {(inputs: Recency_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eilen`)
};

/**
* | output |
* | --- |
* | "Yesterday" |
*
* @param {Recency_YesterdayInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const recency_yesterday = /** @type {((inputs?: Recency_YesterdayInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_YesterdayInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_recency_yesterday(inputs)
	if (locale === "sk") return sk_recency_yesterday(inputs)
	if (locale === "es") return es_recency_yesterday(inputs)
	if (locale === "de") return de_recency_yesterday(inputs)
	if (locale === "fr") return fr_recency_yesterday(inputs)
	if (locale === "pl") return pl_recency_yesterday(inputs)
	if (locale === "hu") return hu_recency_yesterday(inputs)
	if (locale === "it") return it_recency_yesterday(inputs)
	if (locale === "nl") return nl_recency_yesterday(inputs)
	if (locale === "pt") return pt_recency_yesterday(inputs)
	if (locale === "da") return da_recency_yesterday(inputs)
	if (locale === "sl") return sl_recency_yesterday(inputs)
	if (locale === "hr") return hr_recency_yesterday(inputs)
	if (locale === "ro") return ro_recency_yesterday(inputs)
	if (locale === "sv") return sv_recency_yesterday(inputs)
	if (locale === "fi") return fi_recency_yesterday(inputs)
	return en_recency_yesterday(inputs)
});