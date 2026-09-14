/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Brand_NameInputs */

const en_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const bg_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const cs_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const sk_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const es_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const de_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const et_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const fr_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const pl_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const hu_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const it_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const lt_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const lv_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const nl_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const no_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const pt_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const da_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const sl_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const hr_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const ro_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const sv_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

const fi_brand_name = /** @type {(inputs: Brand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cusuai.com`)
};

/**
* | output |
* | --- |
* | "cusuai.com" |
*
* @param {Brand_NameInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const brand_name = /** @type {((inputs?: Brand_NameInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Brand_NameInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_brand_name(inputs)
	if (locale === "cs") return cs_brand_name(inputs)
	if (locale === "sk") return sk_brand_name(inputs)
	if (locale === "es") return es_brand_name(inputs)
	if (locale === "de") return de_brand_name(inputs)
	if (locale === "et") return et_brand_name(inputs)
	if (locale === "fr") return fr_brand_name(inputs)
	if (locale === "pl") return pl_brand_name(inputs)
	if (locale === "hu") return hu_brand_name(inputs)
	if (locale === "it") return it_brand_name(inputs)
	if (locale === "lt") return lt_brand_name(inputs)
	if (locale === "lv") return lv_brand_name(inputs)
	if (locale === "nl") return nl_brand_name(inputs)
	if (locale === "no") return no_brand_name(inputs)
	if (locale === "pt") return pt_brand_name(inputs)
	if (locale === "da") return da_brand_name(inputs)
	if (locale === "sl") return sl_brand_name(inputs)
	if (locale === "hr") return hr_brand_name(inputs)
	if (locale === "ro") return ro_brand_name(inputs)
	if (locale === "sv") return sv_brand_name(inputs)
	if (locale === "fi") return fi_brand_name(inputs)
	return en_brand_name(inputs)
});