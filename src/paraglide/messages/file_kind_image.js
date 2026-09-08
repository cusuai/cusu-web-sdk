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

/**
* | output |
* | --- |
* | "Image" |
*
* @param {File_Kind_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const file_kind_image = /** @type {((inputs?: File_Kind_ImageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Kind_ImageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_file_kind_image(inputs)
	if (locale === "sk") return sk_file_kind_image(inputs)
	if (locale === "es") return es_file_kind_image(inputs)
	if (locale === "de") return de_file_kind_image(inputs)
	return en_file_kind_image(inputs)
});