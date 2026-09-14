/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_DictateInputs */

const en_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dictate`)
};

const bg_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Диктуване`)
};

const cs_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktovat`)
};

const sk_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktovať`)
};

const es_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dictar`)
};

const de_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktieren`)
};

const et_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dikteeri`)
};

const fr_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dicter`)
};

const pl_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dyktuj`)
};

const hu_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktálás`)
};

const it_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detta`)
};

const lt_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktuoti`)
};

const lv_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktēt`)
};

const nl_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dicteren`)
};

const no_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dikter`)
};

const pt_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditar`)
};

const da_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dikter`)
};

const sl_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Narekuj`)
};

const hr_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktiraj`)
};

const ro_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dictează`)
};

const sv_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktera`)
};

const fi_aria_dictate = /** @type {(inputs: Aria_DictateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanele`)
};

/**
* | output |
* | --- |
* | "Dictate" |
*
* @param {Aria_DictateInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_dictate = /** @type {((inputs?: Aria_DictateInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_DictateInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_dictate(inputs)
	if (locale === "cs") return cs_aria_dictate(inputs)
	if (locale === "sk") return sk_aria_dictate(inputs)
	if (locale === "es") return es_aria_dictate(inputs)
	if (locale === "de") return de_aria_dictate(inputs)
	if (locale === "et") return et_aria_dictate(inputs)
	if (locale === "fr") return fr_aria_dictate(inputs)
	if (locale === "pl") return pl_aria_dictate(inputs)
	if (locale === "hu") return hu_aria_dictate(inputs)
	if (locale === "it") return it_aria_dictate(inputs)
	if (locale === "lt") return lt_aria_dictate(inputs)
	if (locale === "lv") return lv_aria_dictate(inputs)
	if (locale === "nl") return nl_aria_dictate(inputs)
	if (locale === "no") return no_aria_dictate(inputs)
	if (locale === "pt") return pt_aria_dictate(inputs)
	if (locale === "da") return da_aria_dictate(inputs)
	if (locale === "sl") return sl_aria_dictate(inputs)
	if (locale === "hr") return hr_aria_dictate(inputs)
	if (locale === "ro") return ro_aria_dictate(inputs)
	if (locale === "sv") return sv_aria_dictate(inputs)
	if (locale === "fi") return fi_aria_dictate(inputs)
	return en_aria_dictate(inputs)
});