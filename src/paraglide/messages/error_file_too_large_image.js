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

const fr_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les images doivent faire au maximum 8 Mo.`)
};

const pl_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrazy mogą mieć maksymalnie 8 MB.`)
};

const hu_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A képek mérete legfeljebb 8 MB lehet.`)
};

const it_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le immagini possono avere una dimensione massima di 8 MB.`)
};

const nl_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen mogen maximaal 8 MB groot zijn.`)
};

const pt_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As imagens podem ter no máximo 8 MB.`)
};

const da_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Billeder må højst være 8 MB.`)
};

const sl_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slike so lahko velike največ 8 MB.`)
};

const hr_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slike mogu imati najviše 8 MB.`)
};

const ro_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imaginile pot avea cel mult 8 MB.`)
};

const sv_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder får vara högst 8 MB.`)
};

const fi_error_file_too_large_image = /** @type {(inputs: Error_File_Too_Large_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuvan koko voi olla enintään 8 Mt.`)
};

/**
* | output |
* | --- |
* | "Images can be at most 8 MB." |
*
* @param {Error_File_Too_Large_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_file_too_large_image = /** @type {((inputs?: Error_File_Too_Large_ImageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_File_Too_Large_ImageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_file_too_large_image(inputs)
	if (locale === "sk") return sk_error_file_too_large_image(inputs)
	if (locale === "es") return es_error_file_too_large_image(inputs)
	if (locale === "de") return de_error_file_too_large_image(inputs)
	if (locale === "fr") return fr_error_file_too_large_image(inputs)
	if (locale === "pl") return pl_error_file_too_large_image(inputs)
	if (locale === "hu") return hu_error_file_too_large_image(inputs)
	if (locale === "it") return it_error_file_too_large_image(inputs)
	if (locale === "nl") return nl_error_file_too_large_image(inputs)
	if (locale === "pt") return pt_error_file_too_large_image(inputs)
	if (locale === "da") return da_error_file_too_large_image(inputs)
	if (locale === "sl") return sl_error_file_too_large_image(inputs)
	if (locale === "hr") return hr_error_file_too_large_image(inputs)
	if (locale === "ro") return ro_error_file_too_large_image(inputs)
	if (locale === "sv") return sv_error_file_too_large_image(inputs)
	if (locale === "fi") return fi_error_file_too_large_image(inputs)
	return en_error_file_too_large_image(inputs)
});