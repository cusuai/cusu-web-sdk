/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Gallery_PrevInputs */

const en_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous image`)
};

const cs_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Předchozí obrázek`)
};

const sk_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Predchádzajúci obrázok`)
};

const es_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen anterior`)
};

const de_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorheriges Bild`)
};

const fr_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image précédente`)
};

const pl_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzedni obraz`)
};

const hu_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Előző kép`)
};

const it_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine precedente`)
};

const nl_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige afbeelding`)
};

const pt_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem anterior`)
};

const da_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forrige billede`)
};

const sl_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prejšnja slika`)
};

const hr_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prethodna slika`)
};

const ro_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imaginea anterioară`)
};

const sv_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående bild`)
};

const fi_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edellinen kuva`)
};

/**
* | output |
* | --- |
* | "Previous image" |
*
* @param {Aria_Gallery_PrevInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_gallery_prev = /** @type {((inputs?: Aria_Gallery_PrevInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Gallery_PrevInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_gallery_prev(inputs)
	if (locale === "sk") return sk_aria_gallery_prev(inputs)
	if (locale === "es") return es_aria_gallery_prev(inputs)
	if (locale === "de") return de_aria_gallery_prev(inputs)
	if (locale === "fr") return fr_aria_gallery_prev(inputs)
	if (locale === "pl") return pl_aria_gallery_prev(inputs)
	if (locale === "hu") return hu_aria_gallery_prev(inputs)
	if (locale === "it") return it_aria_gallery_prev(inputs)
	if (locale === "nl") return nl_aria_gallery_prev(inputs)
	if (locale === "pt") return pt_aria_gallery_prev(inputs)
	if (locale === "da") return da_aria_gallery_prev(inputs)
	if (locale === "sl") return sl_aria_gallery_prev(inputs)
	if (locale === "hr") return hr_aria_gallery_prev(inputs)
	if (locale === "ro") return ro_aria_gallery_prev(inputs)
	if (locale === "sv") return sv_aria_gallery_prev(inputs)
	if (locale === "fi") return fi_aria_gallery_prev(inputs)
	return en_aria_gallery_prev(inputs)
});