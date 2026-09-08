/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_DownInputs */

const en_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbs down`)
};

const cs_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec dolů`)
};

const sk_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec dole`)
};

const es_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulgar abajo`)
};

const de_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daumen runter`)
};

const fr_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pouce vers le bas`)
};

const pl_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kciuk w dół`)
};

const hu_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lefelé mutató hüvelykujj`)
};

const it_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pollice in giù`)
};

const nl_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duim omlaag`)
};

const pt_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polegar para baixo`)
};

const da_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tommelfinger ned`)
};

const sl_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec dol`)
};

const hr_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palac dolje`)
};

const ro_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Degetul mare în jos`)
};

const sv_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tummen ner`)
};

const fi_aria_rating_down = /** @type {(inputs: Aria_Rating_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peukku alas`)
};

/**
* | output |
* | --- |
* | "Thumbs down" |
*
* @param {Aria_Rating_DownInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_rating_down = /** @type {((inputs?: Aria_Rating_DownInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_DownInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_down(inputs)
	if (locale === "sk") return sk_aria_rating_down(inputs)
	if (locale === "es") return es_aria_rating_down(inputs)
	if (locale === "de") return de_aria_rating_down(inputs)
	if (locale === "fr") return fr_aria_rating_down(inputs)
	if (locale === "pl") return pl_aria_rating_down(inputs)
	if (locale === "hu") return hu_aria_rating_down(inputs)
	if (locale === "it") return it_aria_rating_down(inputs)
	if (locale === "nl") return nl_aria_rating_down(inputs)
	if (locale === "pt") return pt_aria_rating_down(inputs)
	if (locale === "da") return da_aria_rating_down(inputs)
	if (locale === "sl") return sl_aria_rating_down(inputs)
	if (locale === "hr") return hr_aria_rating_down(inputs)
	if (locale === "ro") return ro_aria_rating_down(inputs)
	if (locale === "sv") return sv_aria_rating_down(inputs)
	if (locale === "fi") return fi_aria_rating_down(inputs)
	return en_aria_rating_down(inputs)
});