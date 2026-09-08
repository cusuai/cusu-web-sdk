/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_Kind_LinkInputs */

const en_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const cs_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odkaz`)
};

const sk_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odkaz`)
};

const es_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace`)
};

const de_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const fr_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien`)
};

const pl_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const hu_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hivatkozás`)
};

const it_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const nl_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const pt_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ligação`)
};

const da_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const sl_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povezava`)
};

const hr_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poveznica`)
};

const ro_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const sv_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk`)
};

const fi_file_kind_link = /** @type {(inputs: File_Kind_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linkki`)
};

/**
* | output |
* | --- |
* | "Link" |
*
* @param {File_Kind_LinkInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const file_kind_link = /** @type {((inputs?: File_Kind_LinkInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Kind_LinkInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_file_kind_link(inputs)
	if (locale === "sk") return sk_file_kind_link(inputs)
	if (locale === "es") return es_file_kind_link(inputs)
	if (locale === "de") return de_file_kind_link(inputs)
	if (locale === "fr") return fr_file_kind_link(inputs)
	if (locale === "pl") return pl_file_kind_link(inputs)
	if (locale === "hu") return hu_file_kind_link(inputs)
	if (locale === "it") return it_file_kind_link(inputs)
	if (locale === "nl") return nl_file_kind_link(inputs)
	if (locale === "pt") return pt_file_kind_link(inputs)
	if (locale === "da") return da_file_kind_link(inputs)
	if (locale === "sl") return sl_file_kind_link(inputs)
	if (locale === "hr") return hr_file_kind_link(inputs)
	if (locale === "ro") return ro_file_kind_link(inputs)
	if (locale === "sv") return sv_file_kind_link(inputs)
	if (locale === "fi") return fi_file_kind_link(inputs)
	return en_file_kind_link(inputs)
});