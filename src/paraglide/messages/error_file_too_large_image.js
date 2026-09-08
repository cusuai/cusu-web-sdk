/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_File_Too_Large_ImageInputs */

const en_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images can be at most 8 MB.`)
};

const cs_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrázek může mít nejvýš 8 MB.`)
};

const sk_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrázok môže mať najviac 8 MB.`)
};

const es_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las imágenes pueden tener un máximo de 8 MB.`)
};

const de_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder dürfen höchstens 8 MB groß sein.`)
};

/**
* | output |
* | --- |
* | "Images can be at most 8 MB." |
*
* @param {Error_File_Too_Large_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const error_file_too_large_image = /** @type {((inputs?: Error_File_Too_Large_ImageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_File_Too_Large_ImageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_file_too_large_image(inputs)
	if (locale === "sk") return sk_error_file_too_large_image(inputs)
	if (locale === "es") return es_error_file_too_large_image(inputs)
	if (locale === "de") return de_error_file_too_large_image(inputs)
	return en_error_file_too_large_image(inputs)
});