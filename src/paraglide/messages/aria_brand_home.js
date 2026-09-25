/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Brand_HomeInputs */

const en_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`from cusuai.com`)
};

const bg_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`от cusuai.com`)
};

const cs_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusuai.com`)
};

const sk_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusuai.com`)
};

const es_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`de cusuai.com`)
};

const de_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`von cusuai.com`)
};

const et_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`teenust pakub cusuai.com`)
};

const fr_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`par cusuai.com`)
};

const pl_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusuai.com`)
};

const hu_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a cusuai.com-tól`)
};

const it_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`di cusuai.com`)
};

const lt_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`teikia cusuai.com`)
};

const lv_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nodrošina cusuai.com`)
};

const nl_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`van cusuai.com`)
};

const no_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fra cusuai.com`)
};

const pt_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`da cusuai.com`)
};

const da_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fra cusuai.com`)
};

const sl_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusuai.com`)
};

const hr_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusuai.com`)
};

const sr_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posetite sajt cusuai.com`)
};

const mk_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посетете ја страницата cusuai.com`)
};

const ro_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`de la cusuai.com`)
};

const sv_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`från cusuai.com`)
};

const fi_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`palvelun tarjoaa cusuai.com`)
};

/**
* | output |
* | --- |
* | "from cusuai.com" |
*
* @param {Aria_Brand_HomeInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_brand_home = /** @type {((inputs?: Aria_Brand_HomeInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Brand_HomeInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_brand_home(inputs)
	if (locale === "cs") return cs_aria_brand_home(inputs)
	if (locale === "sk") return sk_aria_brand_home(inputs)
	if (locale === "es") return es_aria_brand_home(inputs)
	if (locale === "de") return de_aria_brand_home(inputs)
	if (locale === "et") return et_aria_brand_home(inputs)
	if (locale === "fr") return fr_aria_brand_home(inputs)
	if (locale === "pl") return pl_aria_brand_home(inputs)
	if (locale === "hu") return hu_aria_brand_home(inputs)
	if (locale === "it") return it_aria_brand_home(inputs)
	if (locale === "lt") return lt_aria_brand_home(inputs)
	if (locale === "lv") return lv_aria_brand_home(inputs)
	if (locale === "nl") return nl_aria_brand_home(inputs)
	if (locale === "no") return no_aria_brand_home(inputs)
	if (locale === "pt") return pt_aria_brand_home(inputs)
	if (locale === "da") return da_aria_brand_home(inputs)
	if (locale === "sl") return sl_aria_brand_home(inputs)
	if (locale === "hr") return hr_aria_brand_home(inputs)
	if (locale === "sr") return sr_aria_brand_home(inputs)
	if (locale === "mk") return mk_aria_brand_home(inputs)
	if (locale === "ro") return ro_aria_brand_home(inputs)
	if (locale === "sv") return sv_aria_brand_home(inputs)
	if (locale === "fi") return fi_aria_brand_home(inputs)
	return en_aria_brand_home(inputs)
});