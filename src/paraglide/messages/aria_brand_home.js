/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Brand_HomeInputs */

const en_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`from cusu.ai`)
};

const cs_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusu.ai`)
};

const sk_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusu.ai`)
};

const es_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`de cusu.ai`)
};

const de_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`von cusu.ai`)
};

const fr_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`par cusu.ai`)
};

const pl_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusu.ai`)
};

const hu_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a cusu.ai-tól`)
};

const it_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`di cusu.ai`)
};

const nl_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`van cusu.ai`)
};

const pt_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`da cusu.ai`)
};

const da_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fra cusu.ai`)
};

const sl_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusu.ai`)
};

const hr_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`od cusu.ai`)
};

const ro_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`de la cusu.ai`)
};

const sv_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`från cusu.ai`)
};

const fi_aria_brand_home = /** @type {(inputs: Aria_Brand_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`palvelun tarjoaa cusu.ai`)
};

/**
* | output |
* | --- |
* | "from cusu.ai" |
*
* @param {Aria_Brand_HomeInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_brand_home = /** @type {((inputs?: Aria_Brand_HomeInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Brand_HomeInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_brand_home(inputs)
	if (locale === "sk") return sk_aria_brand_home(inputs)
	if (locale === "es") return es_aria_brand_home(inputs)
	if (locale === "de") return de_aria_brand_home(inputs)
	if (locale === "fr") return fr_aria_brand_home(inputs)
	if (locale === "pl") return pl_aria_brand_home(inputs)
	if (locale === "hu") return hu_aria_brand_home(inputs)
	if (locale === "it") return it_aria_brand_home(inputs)
	if (locale === "nl") return nl_aria_brand_home(inputs)
	if (locale === "pt") return pt_aria_brand_home(inputs)
	if (locale === "da") return da_aria_brand_home(inputs)
	if (locale === "sl") return sl_aria_brand_home(inputs)
	if (locale === "hr") return hr_aria_brand_home(inputs)
	if (locale === "ro") return ro_aria_brand_home(inputs)
	if (locale === "sv") return sv_aria_brand_home(inputs)
	if (locale === "fi") return fi_aria_brand_home(inputs)
	return en_aria_brand_home(inputs)
});