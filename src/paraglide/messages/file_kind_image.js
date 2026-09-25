/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_Kind_ImageInputs */

const en_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image`)
};

const bg_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение`)
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

const et_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pilt`)
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

const lt_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vaizdas`)
};

const lv_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attēls`)
};

const nl_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding`)
};

const no_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilde`)
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

const sr_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slika`)
};

const mk_file_kind_image = /** @type {(inputs: File_Kind_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слика`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const file_kind_image = /** @type {((inputs?: File_Kind_ImageInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Kind_ImageInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_file_kind_image(inputs)
	if (locale === "cs") return cs_file_kind_image(inputs)
	if (locale === "sk") return sk_file_kind_image(inputs)
	if (locale === "es") return es_file_kind_image(inputs)
	if (locale === "de") return de_file_kind_image(inputs)
	if (locale === "et") return et_file_kind_image(inputs)
	if (locale === "fr") return fr_file_kind_image(inputs)
	if (locale === "pl") return pl_file_kind_image(inputs)
	if (locale === "hu") return hu_file_kind_image(inputs)
	if (locale === "it") return it_file_kind_image(inputs)
	if (locale === "lt") return lt_file_kind_image(inputs)
	if (locale === "lv") return lv_file_kind_image(inputs)
	if (locale === "nl") return nl_file_kind_image(inputs)
	if (locale === "no") return no_file_kind_image(inputs)
	if (locale === "pt") return pt_file_kind_image(inputs)
	if (locale === "da") return da_file_kind_image(inputs)
	if (locale === "sl") return sl_file_kind_image(inputs)
	if (locale === "hr") return hr_file_kind_image(inputs)
	if (locale === "sr") return sr_file_kind_image(inputs)
	if (locale === "mk") return mk_file_kind_image(inputs)
	if (locale === "ro") return ro_file_kind_image(inputs)
	if (locale === "sv") return sv_file_kind_image(inputs)
	if (locale === "fi") return fi_file_kind_image(inputs)
	return en_file_kind_image(inputs)
});