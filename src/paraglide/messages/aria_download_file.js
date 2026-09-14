/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Download_FileInputs */

const en_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download file`)
};

const bg_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изтегляне на файла`)
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

const et_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laadi fail alla`)
};

const fr_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger le fichier`)
};

const pl_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz plik`)
};

const hu_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fájl letöltése`)
};

const it_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica file`)
};

const lt_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atsisiųsti failą`)
};

const lv_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lejupielādēt failu`)
};

const nl_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand downloaden`)
};

const no_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last ned filen`)
};

const pt_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transferir ficheiro`)
};

const da_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download fil`)
};

const sl_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prenesi datoteko`)
};

const hr_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preuzmi datoteku`)
};

const ro_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarcă fișierul`)
};

const sv_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner fil`)
};

const fi_aria_download_file = /** @type {(inputs: Aria_Download_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lataa tiedosto`)
};

/**
* | output |
* | --- |
* | "Download file" |
*
* @param {Aria_Download_FileInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_download_file = /** @type {((inputs?: Aria_Download_FileInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Download_FileInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_download_file(inputs)
	if (locale === "cs") return cs_aria_download_file(inputs)
	if (locale === "sk") return sk_aria_download_file(inputs)
	if (locale === "es") return es_aria_download_file(inputs)
	if (locale === "de") return de_aria_download_file(inputs)
	if (locale === "et") return et_aria_download_file(inputs)
	if (locale === "fr") return fr_aria_download_file(inputs)
	if (locale === "pl") return pl_aria_download_file(inputs)
	if (locale === "hu") return hu_aria_download_file(inputs)
	if (locale === "it") return it_aria_download_file(inputs)
	if (locale === "lt") return lt_aria_download_file(inputs)
	if (locale === "lv") return lv_aria_download_file(inputs)
	if (locale === "nl") return nl_aria_download_file(inputs)
	if (locale === "no") return no_aria_download_file(inputs)
	if (locale === "pt") return pt_aria_download_file(inputs)
	if (locale === "da") return da_aria_download_file(inputs)
	if (locale === "sl") return sl_aria_download_file(inputs)
	if (locale === "hr") return hr_aria_download_file(inputs)
	if (locale === "ro") return ro_aria_download_file(inputs)
	if (locale === "sv") return sv_aria_download_file(inputs)
	if (locale === "fi") return fi_aria_download_file(inputs)
	return en_aria_download_file(inputs)
});