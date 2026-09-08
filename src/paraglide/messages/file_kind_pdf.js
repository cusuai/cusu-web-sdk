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

const sk_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const es_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const de_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const fr_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const pl_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const hu_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const it_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const nl_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const pt_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const da_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const sl_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const hr_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const ro_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const sv_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

const fi_file_kind_pdf = /** @type {(inputs: File_Kind_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF`)
};

/**
* | output |
* | --- |
* | "PDF" |
*
* @param {File_Kind_PdfInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const file_kind_pdf = /** @type {((inputs?: File_Kind_PdfInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Kind_PdfInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_file_kind_pdf(inputs)
	if (locale === "sk") return sk_file_kind_pdf(inputs)
	if (locale === "es") return es_file_kind_pdf(inputs)
	if (locale === "de") return de_file_kind_pdf(inputs)
	if (locale === "fr") return fr_file_kind_pdf(inputs)
	if (locale === "pl") return pl_file_kind_pdf(inputs)
	if (locale === "hu") return hu_file_kind_pdf(inputs)
	if (locale === "it") return it_file_kind_pdf(inputs)
	if (locale === "nl") return nl_file_kind_pdf(inputs)
	if (locale === "pt") return pt_file_kind_pdf(inputs)
	if (locale === "da") return da_file_kind_pdf(inputs)
	if (locale === "sl") return sl_file_kind_pdf(inputs)
	if (locale === "hr") return hr_file_kind_pdf(inputs)
	if (locale === "ro") return ro_file_kind_pdf(inputs)
	if (locale === "sv") return sv_file_kind_pdf(inputs)
	if (locale === "fi") return fi_file_kind_pdf(inputs)
	return en_file_kind_pdf(inputs)
});