/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Upload_FailedInputs */

const en_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not upload the file.`)
};

const cs_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soubor se nepodařilo nahrát.`)
};

const sk_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Súbor sa nepodarilo nahrať.`)
};

const es_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo subir el archivo.`)
};

const de_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei konnte nicht hochgeladen werden.`)
};

/**
* | output |
* | --- |
* | "Could not upload the file." |
*
* @param {Error_Upload_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const error_upload_failed = /** @type {((inputs?: Error_Upload_FailedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Upload_FailedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_upload_failed(inputs)
	if (locale === "sk") return sk_error_upload_failed(inputs)
	if (locale === "es") return es_error_upload_failed(inputs)
	if (locale === "de") return de_error_upload_failed(inputs)
	return en_error_upload_failed(inputs)
});