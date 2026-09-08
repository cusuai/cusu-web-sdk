/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Gallery_NextInputs */

const en_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next image`)
};

const cs_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Další obrázek`)
};

const sk_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasledujúci obrázok`)
};

const es_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen siguiente`)
};

const de_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächstes Bild`)
};

const fr_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image suivante`)
};

const pl_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następny obraz`)
};

const hu_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Következő kép`)
};

const it_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine successiva`)
};

const nl_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende afbeelding`)
};

const pt_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem seguinte`)
};

const da_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Næste billede`)
};

const sl_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naslednja slika`)
};

const hr_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sljedeća slika`)
};

const ro_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imaginea următoare`)
};

const sv_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa bild`)
};

const fi_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seuraava kuva`)
};

/**
* | output |
* | --- |
* | "Next image" |
*
* @param {Aria_Gallery_NextInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_gallery_next = /** @type {((inputs?: Aria_Gallery_NextInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Gallery_NextInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_gallery_next(inputs)
	if (locale === "sk") return sk_aria_gallery_next(inputs)
	if (locale === "es") return es_aria_gallery_next(inputs)
	if (locale === "de") return de_aria_gallery_next(inputs)
	if (locale === "fr") return fr_aria_gallery_next(inputs)
	if (locale === "pl") return pl_aria_gallery_next(inputs)
	if (locale === "hu") return hu_aria_gallery_next(inputs)
	if (locale === "it") return it_aria_gallery_next(inputs)
	if (locale === "nl") return nl_aria_gallery_next(inputs)
	if (locale === "pt") return pt_aria_gallery_next(inputs)
	if (locale === "da") return da_aria_gallery_next(inputs)
	if (locale === "sl") return sl_aria_gallery_next(inputs)
	if (locale === "hr") return hr_aria_gallery_next(inputs)
	if (locale === "ro") return ro_aria_gallery_next(inputs)
	if (locale === "sv") return sv_aria_gallery_next(inputs)
	if (locale === "fi") return fi_aria_gallery_next(inputs)
	return en_aria_gallery_next(inputs)
});