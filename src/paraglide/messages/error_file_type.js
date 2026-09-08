/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_File_TypeInputs */

const en_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only images (JPEG, PNG, GIF, WebP) and PDFs are allowed.`)
};

const cs_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povolené jsou obrázky (JPEG, PNG, GIF, WebP) a PDF.`)
};

const sk_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povolené sú obrázky (JPEG, PNG, GIF, WebP) a PDF.`)
};

/**
* | output |
* | --- |
* | "Only images (JPEG, PNG, GIF, WebP) and PDFs are allowed." |
*
* @param {Error_File_TypeInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_file_type = /** @type {((inputs?: Error_File_TypeInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_File_TypeInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_file_type(inputs)
	if (locale === "sk") return sk_error_file_type(inputs)
	return en_error_file_type(inputs)
});