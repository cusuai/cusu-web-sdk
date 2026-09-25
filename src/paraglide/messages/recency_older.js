/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recency_OlderInputs */

const en_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Older`)
};

const bg_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По-стари`)
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

const et_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vanemad`)
};

const fr_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus anciennes`)
};

const pl_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starsze`)
};

const hu_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Régebbi`)
};

const it_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meno recenti`)
};

const lt_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senesni`)
};

const lv_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senāki`)
};

const nl_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouder`)
};

const no_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eldre`)
};

const pt_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais antigas`)
};

const da_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ældre`)
};

const sl_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starejše`)
};

const hr_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starije`)
};

const sr_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starije`)
};

const mk_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постари`)
};

const ro_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mai vechi`)
};

const sv_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldre`)
};

const fi_recency_older = /** @type {(inputs: Recency_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vanhemmat`)
};

/**
* | output |
* | --- |
* | "Older" |
*
* @param {Recency_OlderInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const recency_older = /** @type {((inputs?: Recency_OlderInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recency_OlderInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_recency_older(inputs)
	if (locale === "cs") return cs_recency_older(inputs)
	if (locale === "sk") return sk_recency_older(inputs)
	if (locale === "es") return es_recency_older(inputs)
	if (locale === "de") return de_recency_older(inputs)
	if (locale === "et") return et_recency_older(inputs)
	if (locale === "fr") return fr_recency_older(inputs)
	if (locale === "pl") return pl_recency_older(inputs)
	if (locale === "hu") return hu_recency_older(inputs)
	if (locale === "it") return it_recency_older(inputs)
	if (locale === "lt") return lt_recency_older(inputs)
	if (locale === "lv") return lv_recency_older(inputs)
	if (locale === "nl") return nl_recency_older(inputs)
	if (locale === "no") return no_recency_older(inputs)
	if (locale === "pt") return pt_recency_older(inputs)
	if (locale === "da") return da_recency_older(inputs)
	if (locale === "sl") return sl_recency_older(inputs)
	if (locale === "hr") return hr_recency_older(inputs)
	if (locale === "sr") return sr_recency_older(inputs)
	if (locale === "mk") return mk_recency_older(inputs)
	if (locale === "ro") return ro_recency_older(inputs)
	if (locale === "sv") return sv_recency_older(inputs)
	if (locale === "fi") return fi_recency_older(inputs)
	return en_recency_older(inputs)
});