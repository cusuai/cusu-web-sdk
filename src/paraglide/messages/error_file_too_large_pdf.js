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

const sk_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF môže mať najviac 16 MB.`)
};

const es_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los archivos PDF pueden tener un máximo de 16 MB.`)
};

const de_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF-Dateien dürfen höchstens 16 MB groß sein.`)
};

const fr_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les fichiers PDF doivent faire au maximum 16 Mo.`)
};

const pl_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pliki PDF mogą mieć maksymalnie 16 MB.`)
};

const hu_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A PDF-fájlok mérete legfeljebb 16 MB lehet.`)
};

const it_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I file PDF possono avere una dimensione massima di 16 MB.`)
};

const nl_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF-bestanden mogen maximaal 16 MB groot zijn.`)
};

const pt_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os ficheiros PDF podem ter no máximo 16 MB.`)
};

const da_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF-filer må højst være 16 MB.`)
};

const sl_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datoteke PDF so lahko velike največ 16 MB.`)
};

const hr_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF datoteke mogu imati najviše 16 MB.`)
};

const ro_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fișierele PDF pot avea cel mult 16 MB.`)
};

const sv_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF-filer får vara högst 16 MB.`)
};

const fi_error_file_too_large_pdf = /** @type {(inputs: Error_File_Too_Large_PdfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PDF-tiedoston koko voi olla enintään 16 Mt.`)
};

/**
* | output |
* | --- |
* | "PDFs can be at most 16 MB." |
*
* @param {Error_File_Too_Large_PdfInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_file_too_large_pdf = /** @type {((inputs?: Error_File_Too_Large_PdfInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_File_Too_Large_PdfInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_file_too_large_pdf(inputs)
	if (locale === "sk") return sk_error_file_too_large_pdf(inputs)
	if (locale === "es") return es_error_file_too_large_pdf(inputs)
	if (locale === "de") return de_error_file_too_large_pdf(inputs)
	if (locale === "fr") return fr_error_file_too_large_pdf(inputs)
	if (locale === "pl") return pl_error_file_too_large_pdf(inputs)
	if (locale === "hu") return hu_error_file_too_large_pdf(inputs)
	if (locale === "it") return it_error_file_too_large_pdf(inputs)
	if (locale === "nl") return nl_error_file_too_large_pdf(inputs)
	if (locale === "pt") return pt_error_file_too_large_pdf(inputs)
	if (locale === "da") return da_error_file_too_large_pdf(inputs)
	if (locale === "sl") return sl_error_file_too_large_pdf(inputs)
	if (locale === "hr") return hr_error_file_too_large_pdf(inputs)
	if (locale === "ro") return ro_error_file_too_large_pdf(inputs)
	if (locale === "sv") return sv_error_file_too_large_pdf(inputs)
	if (locale === "fi") return fi_error_file_too_large_pdf(inputs)
	return en_error_file_too_large_pdf(inputs)
});