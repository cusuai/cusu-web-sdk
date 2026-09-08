/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Brand_NameInputs */

const en_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const cs_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const sk_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const es_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const de_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const fr_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const pl_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const hu_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const it_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const nl_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const pt_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const da_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const sl_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const hr_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const ro_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const sv_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

const fi_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusu.ai`)
};

/**
* | output |
* | --- |
* | "cusu.ai" |
*
* @param {Brand_NameInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const brand_name = /** @type {((inputs?: Brand_NameInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Brand_NameInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_brand_name(inputs)
	if (locale === "sk") return sk_brand_name(inputs)
	if (locale === "es") return es_brand_name(inputs)
	if (locale === "de") return de_brand_name(inputs)
	if (locale === "fr") return fr_brand_name(inputs)
	if (locale === "pl") return pl_brand_name(inputs)
	if (locale === "hu") return hu_brand_name(inputs)
	if (locale === "it") return it_brand_name(inputs)
	if (locale === "nl") return nl_brand_name(inputs)
	if (locale === "pt") return pt_brand_name(inputs)
	if (locale === "da") return da_brand_name(inputs)
	if (locale === "sl") return sl_brand_name(inputs)
	if (locale === "hr") return hr_brand_name(inputs)
	if (locale === "ro") return ro_brand_name(inputs)
	if (locale === "sv") return sv_brand_name(inputs)
	if (locale === "fi") return fi_brand_name(inputs)
	return en_brand_name(inputs)
});