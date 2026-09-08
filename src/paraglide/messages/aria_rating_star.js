/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ star: NonNullable<unknown> }} Aria_Rating_StarInputs */

const en_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rate ${i?.star} out of 5`)
};

const cs_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ohodnotit ${i?.star} z 5`)
};

const sk_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ohodnotiť ${i?.star} z 5`)
};

const es_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Valorar con ${i?.star} de 5 estrellas`)
};

const de_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mit ${i?.star} von 5 Sternen bewerten`)
};

const fr_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Évaluer à ${i?.star} étoiles sur 5`)
};

const pl_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oceń na ${i?.star} z 5 gwiazdek`)
};

const hu_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Értékelés: ${i?.star} az 5 csillagból`)
};

const it_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Valuta con ${i?.star} stelle su 5`)
};

const nl_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beoordeel met ${i?.star} van 5 sterren`)
};

const pt_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avaliar com ${i?.star} de 5 estrelas`)
};

const da_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bedøm med ${i?.star} ud af 5 stjerner`)
};

const sl_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocenite z ${i?.star} od 5 zvezdic`)
};

const hr_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocijenite s ${i?.star} od 5 zvjezdica`)
};

const ro_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Evaluați cu ${i?.star} din 5 stele`)
};

const sv_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Betygsätt med ${i?.star} av 5 stjärnor`)
};

const fi_aria_rating_star = /** @type {(inputs: Aria_Rating_StarInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anna arvosanaksi ${i?.star}/5`)
};

/**
* | output |
* | --- |
* | "Rate {star} out of 5" |
*
* @param {Aria_Rating_StarInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_rating_star = /** @type {((inputs: Aria_Rating_StarInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Rating_StarInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_rating_star(inputs)
	if (locale === "sk") return sk_aria_rating_star(inputs)
	if (locale === "es") return es_aria_rating_star(inputs)
	if (locale === "de") return de_aria_rating_star(inputs)
	if (locale === "fr") return fr_aria_rating_star(inputs)
	if (locale === "pl") return pl_aria_rating_star(inputs)
	if (locale === "hu") return hu_aria_rating_star(inputs)
	if (locale === "it") return it_aria_rating_star(inputs)
	if (locale === "nl") return nl_aria_rating_star(inputs)
	if (locale === "pt") return pt_aria_rating_star(inputs)
	if (locale === "da") return da_aria_rating_star(inputs)
	if (locale === "sl") return sl_aria_rating_star(inputs)
	if (locale === "hr") return hr_aria_rating_star(inputs)
	if (locale === "ro") return ro_aria_rating_star(inputs)
	if (locale === "sv") return sv_aria_rating_star(inputs)
	if (locale === "fi") return fi_aria_rating_star(inputs)
	return en_aria_rating_star(inputs)
});