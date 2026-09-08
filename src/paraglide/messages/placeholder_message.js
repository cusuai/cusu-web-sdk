/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Placeholder_MessageInputs */

const en_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message…`)
};

const cs_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zpráva…`)
};

const sk_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Správa…`)
};

const es_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensaje…`)
};

const de_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachricht…`)
};

const fr_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message…`)
};

const pl_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiadomość…`)
};

const hu_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üzenet…`)
};

const it_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Messaggio…`)
};

const nl_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bericht…`)
};

const pt_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem…`)
};

const da_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besked…`)
};

const sl_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sporočilo…`)
};

const hr_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poruka…`)
};

const ro_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mesaj…`)
};

const sv_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelande…`)
};

const fi_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viesti…`)
};

/**
* | output |
* | --- |
* | "Message…" |
*
* @param {Placeholder_MessageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const placeholder_message = /** @type {((inputs?: Placeholder_MessageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Placeholder_MessageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_placeholder_message(inputs)
	if (locale === "sk") return sk_placeholder_message(inputs)
	if (locale === "es") return es_placeholder_message(inputs)
	if (locale === "de") return de_placeholder_message(inputs)
	if (locale === "fr") return fr_placeholder_message(inputs)
	if (locale === "pl") return pl_placeholder_message(inputs)
	if (locale === "hu") return hu_placeholder_message(inputs)
	if (locale === "it") return it_placeholder_message(inputs)
	if (locale === "nl") return nl_placeholder_message(inputs)
	if (locale === "pt") return pt_placeholder_message(inputs)
	if (locale === "da") return da_placeholder_message(inputs)
	if (locale === "sl") return sl_placeholder_message(inputs)
	if (locale === "hr") return hr_placeholder_message(inputs)
	if (locale === "ro") return ro_placeholder_message(inputs)
	if (locale === "sv") return sv_placeholder_message(inputs)
	if (locale === "fi") return fi_placeholder_message(inputs)
	return en_placeholder_message(inputs)
});