/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_MessageInputs */

const en_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

const cs_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zpráva`)
};

const sk_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Správa`)
};

const es_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensaje`)
};

const de_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachricht`)
};

const fr_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

const pl_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiadomość`)
};

const hu_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üzenet`)
};

const it_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Messaggio`)
};

const nl_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bericht`)
};

const pt_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem`)
};

const da_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besked`)
};

const sl_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sporočilo`)
};

const hr_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poruka`)
};

const ro_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mesaj`)
};

const sv_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelande`)
};

const fi_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viesti`)
};

/**
* | output |
* | --- |
* | "Message" |
*
* @param {Aria_MessageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_message = /** @type {((inputs?: Aria_MessageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_MessageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_message(inputs)
	if (locale === "sk") return sk_aria_message(inputs)
	if (locale === "es") return es_aria_message(inputs)
	if (locale === "de") return de_aria_message(inputs)
	if (locale === "fr") return fr_aria_message(inputs)
	if (locale === "pl") return pl_aria_message(inputs)
	if (locale === "hu") return hu_aria_message(inputs)
	if (locale === "it") return it_aria_message(inputs)
	if (locale === "nl") return nl_aria_message(inputs)
	if (locale === "pt") return pt_aria_message(inputs)
	if (locale === "da") return da_aria_message(inputs)
	if (locale === "sl") return sl_aria_message(inputs)
	if (locale === "hr") return hr_aria_message(inputs)
	if (locale === "ro") return ro_aria_message(inputs)
	if (locale === "sv") return sv_aria_message(inputs)
	if (locale === "fi") return fi_aria_message(inputs)
	return en_aria_message(inputs)
});