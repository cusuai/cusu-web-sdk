/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_UpInputs */

const en_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbs up`)
};

const bg_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Харесва ми`)
};

const cs_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec nahoru`)
};

const sk_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec hore`)
};

const es_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulgar arriba`)
};

const de_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daumen hoch`)
};

const et_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meeldib`)
};

const fr_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pouce vers le haut`)
};

const pl_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kciuk w górę`)
};

const hu_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Felfelé mutató hüvelykujj`)
};

const it_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pollice in su`)
};

const lt_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patinka`)
};

const lv_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patīk`)
};

const nl_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duim omhoog`)
};

const no_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tommel opp`)
};

const pt_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polegar para cima`)
};

const da_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tommelfinger op`)
};

const sl_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palec gor`)
};

const hr_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palac gore`)
};

const sr_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palac gore`)
};

const mk_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Палец нагоре`)
};

const ro_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Degetul mare în sus`)
};

const sv_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tummen upp`)
};

const fi_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peukku ylös`)
};

/**
* | output |
* | --- |
* | "Thumbs up" |
*
* @param {Aria_Rating_UpInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_rating_up = /** @type {((inputs?: Aria_Rating_UpInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_UpInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_rating_up(inputs)
	if (locale === "cs") return cs_aria_rating_up(inputs)
	if (locale === "sk") return sk_aria_rating_up(inputs)
	if (locale === "es") return es_aria_rating_up(inputs)
	if (locale === "de") return de_aria_rating_up(inputs)
	if (locale === "et") return et_aria_rating_up(inputs)
	if (locale === "fr") return fr_aria_rating_up(inputs)
	if (locale === "pl") return pl_aria_rating_up(inputs)
	if (locale === "hu") return hu_aria_rating_up(inputs)
	if (locale === "it") return it_aria_rating_up(inputs)
	if (locale === "lt") return lt_aria_rating_up(inputs)
	if (locale === "lv") return lv_aria_rating_up(inputs)
	if (locale === "nl") return nl_aria_rating_up(inputs)
	if (locale === "no") return no_aria_rating_up(inputs)
	if (locale === "pt") return pt_aria_rating_up(inputs)
	if (locale === "da") return da_aria_rating_up(inputs)
	if (locale === "sl") return sl_aria_rating_up(inputs)
	if (locale === "hr") return hr_aria_rating_up(inputs)
	if (locale === "sr") return sr_aria_rating_up(inputs)
	if (locale === "mk") return mk_aria_rating_up(inputs)
	if (locale === "ro") return ro_aria_rating_up(inputs)
	if (locale === "sv") return sv_aria_rating_up(inputs)
	if (locale === "fi") return fi_aria_rating_up(inputs)
	return en_aria_rating_up(inputs)
});