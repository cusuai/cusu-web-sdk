/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Rating_SadInputs */

const en_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unhappy`)
};

const cs_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nespokojený`)
};

const sk_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nespokojný`)
};

const es_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descontento`)
};

const de_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unzufrieden`)
};

const fr_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mécontent`)
};

const pl_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezadowolony`)
};

const hu_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elégedetlen`)
};

const it_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insoddisfatto`)
};

const nl_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontevreden`)
};

const pt_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insatisfeito`)
};

const da_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilfreds`)
};

const sl_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nezadovoljni`)
};

const hr_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nezadovoljni`)
};

const ro_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nemulțumit`)
};

const sv_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missnöjd`)
};

const fi_aria_rating_sad = /** @type {(inputs: Aria_Rating_SadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tyytymätön`)
};

/**
* | output |
* | --- |
* | "Unhappy" |
*
* @param {Aria_Rating_SadInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_rating_sad = /** @type {((inputs?: Aria_Rating_SadInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_SadInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_sad(inputs)
	if (locale === "sk") return sk_aria_rating_sad(inputs)
	if (locale === "es") return es_aria_rating_sad(inputs)
	if (locale === "de") return de_aria_rating_sad(inputs)
	if (locale === "fr") return fr_aria_rating_sad(inputs)
	if (locale === "pl") return pl_aria_rating_sad(inputs)
	if (locale === "hu") return hu_aria_rating_sad(inputs)
	if (locale === "it") return it_aria_rating_sad(inputs)
	if (locale === "nl") return nl_aria_rating_sad(inputs)
	if (locale === "pt") return pt_aria_rating_sad(inputs)
	if (locale === "da") return da_aria_rating_sad(inputs)
	if (locale === "sl") return sl_aria_rating_sad(inputs)
	if (locale === "hr") return hr_aria_rating_sad(inputs)
	if (locale === "ro") return ro_aria_rating_sad(inputs)
	if (locale === "sv") return sv_aria_rating_sad(inputs)
	if (locale === "fi") return fi_aria_rating_sad(inputs)
	return en_aria_rating_sad(inputs)
});