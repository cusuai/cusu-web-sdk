/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Hide_ChatInputs */

const en_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide chat`)
};

const cs_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrýt chat`)
};

const sk_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skryť chat`)
};

const es_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar chat`)
};

const de_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat ausblenden`)
};

const fr_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer le chat`)
};

const pl_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj czat`)
};

const hu_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Csevegés elrejtése`)
};

const it_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi chat`)
};

const nl_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat verbergen`)
};

const pt_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar chat`)
};

const da_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skjul chat`)
};

const sl_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrij klepet`)
};

const hr_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sakrij chat`)
};

const ro_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ascunde chatul`)
};

const sv_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj chatten`)
};

const fi_aria_hide_chat = /** @type {(inputs: Aria_Hide_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piilota keskustelu`)
};

/**
* | output |
* | --- |
* | "Hide chat" |
*
* @param {Aria_Hide_ChatInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_hide_chat = /** @type {((inputs?: Aria_Hide_ChatInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Hide_ChatInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_hide_chat(inputs)
	if (locale === "sk") return sk_aria_hide_chat(inputs)
	if (locale === "es") return es_aria_hide_chat(inputs)
	if (locale === "de") return de_aria_hide_chat(inputs)
	if (locale === "fr") return fr_aria_hide_chat(inputs)
	if (locale === "pl") return pl_aria_hide_chat(inputs)
	if (locale === "hu") return hu_aria_hide_chat(inputs)
	if (locale === "it") return it_aria_hide_chat(inputs)
	if (locale === "nl") return nl_aria_hide_chat(inputs)
	if (locale === "pt") return pt_aria_hide_chat(inputs)
	if (locale === "da") return da_aria_hide_chat(inputs)
	if (locale === "sl") return sl_aria_hide_chat(inputs)
	if (locale === "hr") return hr_aria_hide_chat(inputs)
	if (locale === "ro") return ro_aria_hide_chat(inputs)
	if (locale === "sv") return sv_aria_hide_chat(inputs)
	if (locale === "fi") return fi_aria_hide_chat(inputs)
	return en_aria_hide_chat(inputs)
});