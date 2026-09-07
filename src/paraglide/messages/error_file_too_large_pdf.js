/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_File_Too_Large_PdfInputs */

const en_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDFs can be at most 16 MB.`)
};

const cs_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF může mít nejvýš 16 MB.`)
};

/**
* | output |
* | --- |
* | "PDFs can be at most 16 MB." |
*
* @param {Error_File_Too_Large_PdfInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_file_too_large_pdf = /** @type {((inputs?: Error_File_Too_Large_PdfInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_File_Too_Large_PdfInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_file_too_large_pdf(inputs)
	return en_error_file_too_large_pdf(inputs)
});