/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_Chat_TitleInputs */

const en_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How can I help?`)
};

const cs_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S čím ti můžu pomoct?`)
};

const sk_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S čím vám môžem pomôcť?`)
};

const es_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿En qué puedo ayudarte?`)
};

const de_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie kann ich Ihnen helfen?`)
};

const fr_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment puis-je vous aider ?`)
};

const pl_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak mogę Ci pomóc?`)
};

const hu_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miben segíthetek?`)
};

const it_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come posso aiutarti?`)
};

const nl_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe kan ik helpen?`)
};

const pt_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como posso ajudar?`)
};

const da_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hvordan kan jeg hjælpe?`)
};

const sl_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kako vam lahko pomagam?`)
};

const hr_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kako vam mogu pomoći?`)
};

const ro_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cum vă pot ajuta?`)
};

const sv_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur kan jag hjälpa dig?`)
};

const fi_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuinka voin auttaa?`)
};

/**
* | output |
* | --- |
* | "How can I help?" |
*
* @param {Empty_Chat_TitleInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const empty_chat_title = /** @type {((inputs?: Empty_Chat_TitleInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Chat_TitleInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_chat_title(inputs)
	if (locale === "sk") return sk_empty_chat_title(inputs)
	if (locale === "es") return es_empty_chat_title(inputs)
	if (locale === "de") return de_empty_chat_title(inputs)
	if (locale === "fr") return fr_empty_chat_title(inputs)
	if (locale === "pl") return pl_empty_chat_title(inputs)
	if (locale === "hu") return hu_empty_chat_title(inputs)
	if (locale === "it") return it_empty_chat_title(inputs)
	if (locale === "nl") return nl_empty_chat_title(inputs)
	if (locale === "pt") return pt_empty_chat_title(inputs)
	if (locale === "da") return da_empty_chat_title(inputs)
	if (locale === "sl") return sl_empty_chat_title(inputs)
	if (locale === "hr") return hr_empty_chat_title(inputs)
	if (locale === "ro") return ro_empty_chat_title(inputs)
	if (locale === "sv") return sv_empty_chat_title(inputs)
	if (locale === "fi") return fi_empty_chat_title(inputs)
	return en_empty_chat_title(inputs)
});