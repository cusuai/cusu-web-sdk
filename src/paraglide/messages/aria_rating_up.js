/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_UpInputs */

const en_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbs up`)
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

const nl_aria_rating_up = /** @type {(inputs: Aria_Rating_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duim omhoog`)
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
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_rating_up = /** @type {((inputs?: Aria_Rating_UpInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_UpInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_up(inputs)
	if (locale === "sk") return sk_aria_rating_up(inputs)
	if (locale === "es") return es_aria_rating_up(inputs)
	if (locale === "de") return de_aria_rating_up(inputs)
	if (locale === "fr") return fr_aria_rating_up(inputs)
	if (locale === "pl") return pl_aria_rating_up(inputs)
	if (locale === "hu") return hu_aria_rating_up(inputs)
	if (locale === "it") return it_aria_rating_up(inputs)
	if (locale === "nl") return nl_aria_rating_up(inputs)
	if (locale === "pt") return pt_aria_rating_up(inputs)
	if (locale === "da") return da_aria_rating_up(inputs)
	if (locale === "sl") return sl_aria_rating_up(inputs)
	if (locale === "hr") return hr_aria_rating_up(inputs)
	if (locale === "ro") return ro_aria_rating_up(inputs)
	if (locale === "sv") return sv_aria_rating_up(inputs)
	if (locale === "fi") return fi_aria_rating_up(inputs)
	return en_aria_rating_up(inputs)
});