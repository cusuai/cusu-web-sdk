/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_Kind_ImageInputs */

const en_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image`)
};

const cs_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrázek`)
};

const sk_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrázok`)
};

const es_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen`)
};

const de_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild`)
};

const fr_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image`)
};

const pl_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz`)
};

const hu_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kép`)
};

const it_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine`)
};

const nl_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding`)
};

const pt_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem`)
};

const da_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Billede`)
};

const sl_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slika`)
};

const hr_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slika`)
};

const ro_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagine`)
};

const sv_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild`)
};

const fi_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuva`)
};

/**
* | output |
* | --- |
* | "Image" |
*
* @param {File_Kind_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const file_kind_image = /** @type {((inputs?: File_Kind_ImageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Kind_ImageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_file_kind_image(inputs)
	if (locale === "sk") return sk_file_kind_image(inputs)
	if (locale === "es") return es_file_kind_image(inputs)
	if (locale === "de") return de_file_kind_image(inputs)
	if (locale === "fr") return fr_file_kind_image(inputs)
	if (locale === "pl") return pl_file_kind_image(inputs)
	if (locale === "hu") return hu_file_kind_image(inputs)
	if (locale === "it") return it_file_kind_image(inputs)
	if (locale === "nl") return nl_file_kind_image(inputs)
	if (locale === "pt") return pt_file_kind_image(inputs)
	if (locale === "da") return da_file_kind_image(inputs)
	if (locale === "sl") return sl_file_kind_image(inputs)
	if (locale === "hr") return hr_file_kind_image(inputs)
	if (locale === "ro") return ro_file_kind_image(inputs)
	if (locale === "sv") return sv_file_kind_image(inputs)
	if (locale === "fi") return fi_file_kind_image(inputs)
	return en_file_kind_image(inputs)
});