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

const es_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo se permiten imágenes (JPEG, PNG, GIF, WebP) y archivos PDF.`)
};

const de_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Bilder (JPEG, PNG, GIF, WebP) und PDF-Dateien sind erlaubt.`)
};

const fr_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seules les images (JPEG, PNG, GIF, WebP) et les fichiers PDF sont autorisés.`)
};

const pl_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dozwolone są tylko obrazy (JPEG, PNG, GIF, WebP) i pliki PDF.`)
};

const hu_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Csak képek (JPEG, PNG, GIF, WebP) és PDF-fájlok engedélyezettek.`)
};

const it_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sono consentiti solo immagini (JPEG, PNG, GIF, WebP) e file PDF.`)
};

const nl_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen afbeeldingen (JPEG, PNG, GIF, WebP) en PDF-bestanden zijn toegestaan.`)
};

const pt_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apenas são permitidas imagens (JPEG, PNG, GIF, WebP) e ficheiros PDF.`)
};

const da_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kun billeder (JPEG, PNG, GIF, WebP) og PDF-filer er tilladt.`)
};

const sl_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dovoljene so samo slike (JPEG, PNG, GIF, WebP) in datoteke PDF.`)
};

const hr_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dopuštene su samo slike (JPEG, PNG, GIF, WebP) i PDF datoteke.`)
};

const ro_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunt permise doar imagini (JPEG, PNG, GIF, WebP) și fișiere PDF.`)
};

const sv_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast bilder (JPEG, PNG, GIF, WebP) och PDF-filer är tillåtna.`)
};

const fi_error_file_type = /** @type {(inputs: Error_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vain kuvat (JPEG, PNG, GIF, WebP) ja PDF-tiedostot ovat sallittuja.`)
};

/**
* | output |
* | --- |
* | "Only images (JPEG, PNG, GIF, WebP) and PDFs are allowed." |
*
* @param {Error_File_TypeInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_file_type = /** @type {((inputs?: Error_File_TypeInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_File_TypeInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_file_type(inputs)
	if (locale === "sk") return sk_error_file_type(inputs)
	if (locale === "es") return es_error_file_type(inputs)
	if (locale === "de") return de_error_file_type(inputs)
	if (locale === "fr") return fr_error_file_type(inputs)
	if (locale === "pl") return pl_error_file_type(inputs)
	if (locale === "hu") return hu_error_file_type(inputs)
	if (locale === "it") return it_error_file_type(inputs)
	if (locale === "nl") return nl_error_file_type(inputs)
	if (locale === "pt") return pt_error_file_type(inputs)
	if (locale === "da") return da_error_file_type(inputs)
	if (locale === "sl") return sl_error_file_type(inputs)
	if (locale === "hr") return hr_error_file_type(inputs)
	if (locale === "ro") return ro_error_file_type(inputs)
	if (locale === "sv") return sv_error_file_type(inputs)
	if (locale === "fi") return fi_error_file_type(inputs)
	return en_error_file_type(inputs)
});