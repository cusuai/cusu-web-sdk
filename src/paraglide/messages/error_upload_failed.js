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

const fr_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier n’a pas pu être téléversé.`)
};

const pl_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się przesłać pliku.`)
};

const hu_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nem sikerült feltölteni a fájlt.`)
};

const it_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare il file.`)
};

const nl_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand kon niet worden geüpload.`)
};

const pt_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar o ficheiro.`)
};

const da_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen kunne ikke uploades.`)
};

const sl_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datoteke ni bilo mogoče naložiti.`)
};

const hr_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datoteku nije bilo moguće prenijeti.`)
};

const ro_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fișierul nu a putut fi încărcat.`)
};

const sv_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen kunde inte laddas upp.`)
};

const fi_error_upload_failed = /** @type {(inputs: Error_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiedostoa ei voitu ladata.`)
};

/**
* | output |
* | --- |
* | "Could not upload the file." |
*
* @param {Error_Upload_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_upload_failed = /** @type {((inputs?: Error_Upload_FailedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Upload_FailedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_upload_failed(inputs)
	if (locale === "sk") return sk_error_upload_failed(inputs)
	if (locale === "es") return es_error_upload_failed(inputs)
	if (locale === "de") return de_error_upload_failed(inputs)
	if (locale === "fr") return fr_error_upload_failed(inputs)
	if (locale === "pl") return pl_error_upload_failed(inputs)
	if (locale === "hu") return hu_error_upload_failed(inputs)
	if (locale === "it") return it_error_upload_failed(inputs)
	if (locale === "nl") return nl_error_upload_failed(inputs)
	if (locale === "pt") return pt_error_upload_failed(inputs)
	if (locale === "da") return da_error_upload_failed(inputs)
	if (locale === "sl") return sl_error_upload_failed(inputs)
	if (locale === "hr") return hr_error_upload_failed(inputs)
	if (locale === "ro") return ro_error_upload_failed(inputs)
	if (locale === "sv") return sv_error_upload_failed(inputs)
	if (locale === "fi") return fi_error_upload_failed(inputs)
	return en_error_upload_failed(inputs)
});