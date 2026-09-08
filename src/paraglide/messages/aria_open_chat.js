/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Open_ChatInputs */

const en_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open chat`)
};

const cs_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otevřít chat`)
};

const sk_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otvoriť chat`)
};

const es_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir chat`)
};

const de_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat öffnen`)
};

const fr_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le chat`)
};

const pl_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz czat`)
};

const hu_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Csevegés megnyitása`)
};

const it_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri chat`)
};

const nl_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat openen`)
};

const pt_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir chat`)
};

const da_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åbn chat`)
};

const sl_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpri klepet`)
};

const hr_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otvori chat`)
};

const ro_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deschide chatul`)
};

const sv_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna chatten`)
};

const fi_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaa keskustelu`)
};

/**
* | output |
* | --- |
* | "Open chat" |
*
* @param {Aria_Open_ChatInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_open_chat = /** @type {((inputs?: Aria_Open_ChatInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Open_ChatInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_open_chat(inputs)
	if (locale === "sk") return sk_aria_open_chat(inputs)
	if (locale === "es") return es_aria_open_chat(inputs)
	if (locale === "de") return de_aria_open_chat(inputs)
	if (locale === "fr") return fr_aria_open_chat(inputs)
	if (locale === "pl") return pl_aria_open_chat(inputs)
	if (locale === "hu") return hu_aria_open_chat(inputs)
	if (locale === "it") return it_aria_open_chat(inputs)
	if (locale === "nl") return nl_aria_open_chat(inputs)
	if (locale === "pt") return pt_aria_open_chat(inputs)
	if (locale === "da") return da_aria_open_chat(inputs)
	if (locale === "sl") return sl_aria_open_chat(inputs)
	if (locale === "hr") return hr_aria_open_chat(inputs)
	if (locale === "ro") return ro_aria_open_chat(inputs)
	if (locale === "sv") return sv_aria_open_chat(inputs)
	if (locale === "fi") return fi_aria_open_chat(inputs)
	return en_aria_open_chat(inputs)
});