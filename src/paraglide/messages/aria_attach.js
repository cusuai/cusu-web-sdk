/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_AttachInputs */

const en_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach a file`)
};

const cs_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přiložit soubor`)
};

const sk_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priložiť súbor`)
};

const es_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adjuntar un archivo`)
};

const de_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei anhängen`)
};

const fr_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Joindre un fichier`)
};

const pl_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Załącz plik`)
};

const hu_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fájl csatolása`)
};

const it_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allega un file`)
};

const nl_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand bijvoegen`)
};

const pt_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anexar um ficheiro`)
};

const da_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedhæft en fil`)
};

const sl_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priloži datoteko`)
};

const hr_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priloži datoteku`)
};

const ro_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atașează un fișier`)
};

const sv_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bifoga en fil`)
};

const fi_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liitä tiedosto`)
};

/**
* | output |
* | --- |
* | "Attach a file" |
*
* @param {Aria_AttachInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_attach = /** @type {((inputs?: Aria_AttachInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_AttachInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_attach(inputs)
	if (locale === "sk") return sk_aria_attach(inputs)
	if (locale === "es") return es_aria_attach(inputs)
	if (locale === "de") return de_aria_attach(inputs)
	if (locale === "fr") return fr_aria_attach(inputs)
	if (locale === "pl") return pl_aria_attach(inputs)
	if (locale === "hu") return hu_aria_attach(inputs)
	if (locale === "it") return it_aria_attach(inputs)
	if (locale === "nl") return nl_aria_attach(inputs)
	if (locale === "pt") return pt_aria_attach(inputs)
	if (locale === "da") return da_aria_attach(inputs)
	if (locale === "sl") return sl_aria_attach(inputs)
	if (locale === "hr") return hr_aria_attach(inputs)
	if (locale === "ro") return ro_aria_attach(inputs)
	if (locale === "sv") return sv_aria_attach(inputs)
	if (locale === "fi") return fi_aria_attach(inputs)
	return en_aria_attach(inputs)
});