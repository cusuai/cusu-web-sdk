/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Download_FileInputs */

const en_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download file`)
};

const cs_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stáhnout soubor`)
};

const sk_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stiahnuť súbor`)
};

const es_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar archivo`)
};

const de_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei herunterladen`)
};

/**
* | output |
* | --- |
* | "Download file" |
*
* @param {Aria_Download_FileInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_download_file = /** @type {((inputs?: Aria_Download_FileInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Download_FileInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_download_file(inputs)
	if (locale === "sk") return sk_aria_download_file(inputs)
	if (locale === "es") return es_aria_download_file(inputs)
	if (locale === "de") return de_aria_download_file(inputs)
	return en_aria_download_file(inputs)
});