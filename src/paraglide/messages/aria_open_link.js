/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Open_LinkInputs */

const en_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open link`)
};

const cs_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otevřít odkaz`)
};

const sk_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otvoriť odkaz`)
};

const es_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir enlace`)
};

const de_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link öffnen`)
};

const fr_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le lien`)
};

const pl_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz link`)
};

const hu_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hivatkozás megnyitása`)
};

const it_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri link`)
};

const nl_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link openen`)
};

const pt_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir ligação`)
};

const da_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åbn link`)
};

const sl_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpri povezavo`)
};

const hr_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otvori poveznicu`)
};

const ro_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deschide linkul`)
};

const sv_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna länk`)
};

const fi_aria_open_link = /** @type {(inputs: Aria_Open_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaa linkki`)
};

/**
* | output |
* | --- |
* | "Open link" |
*
* @param {Aria_Open_LinkInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_open_link = /** @type {((inputs?: Aria_Open_LinkInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Open_LinkInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_open_link(inputs)
	if (locale === "sk") return sk_aria_open_link(inputs)
	if (locale === "es") return es_aria_open_link(inputs)
	if (locale === "de") return de_aria_open_link(inputs)
	if (locale === "fr") return fr_aria_open_link(inputs)
	if (locale === "pl") return pl_aria_open_link(inputs)
	if (locale === "hu") return hu_aria_open_link(inputs)
	if (locale === "it") return it_aria_open_link(inputs)
	if (locale === "nl") return nl_aria_open_link(inputs)
	if (locale === "pt") return pt_aria_open_link(inputs)
	if (locale === "da") return da_aria_open_link(inputs)
	if (locale === "sl") return sl_aria_open_link(inputs)
	if (locale === "hr") return hr_aria_open_link(inputs)
	if (locale === "ro") return ro_aria_open_link(inputs)
	if (locale === "sv") return sv_aria_open_link(inputs)
	if (locale === "fi") return fi_aria_open_link(inputs)
	return en_aria_open_link(inputs)
});