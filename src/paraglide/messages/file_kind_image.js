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

/**
* | output |
* | --- |
* | "Image" |
*
* @param {File_Kind_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const file_kind_image = /** @type {((inputs?: File_Kind_ImageInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Kind_ImageInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_file_kind_image(inputs)
	return en_file_kind_image(inputs)
});