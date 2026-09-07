/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_Kind_PdfInputs */

const en_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const cs_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

/**
* | output |
* | --- |
* | "PDF" |
*
* @param {File_Kind_PdfInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const file_kind_pdf = /** @type {((inputs?: File_Kind_PdfInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Kind_PdfInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_file_kind_pdf(inputs)
	return en_file_kind_pdf(inputs)
});