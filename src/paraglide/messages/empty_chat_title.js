/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_Chat_TitleInputs */

const en_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How can I help?`)
};

const bg_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как мога да помогна?`)
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

const et_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuidas saan aidata?`)
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

const lt_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaip galiu padėti?`)
};

const lv_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kā varu palīdzēt?`)
};

const nl_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe kan ik helpen?`)
};

const no_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hvordan kan jeg hjelpe?`)
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

const sr_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kako mogu da vam pomognem?`)
};

const mk_empty_chat_title = /** @type {(inputs: Empty_Chat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Како можам да ви помогнам?`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const empty_chat_title = /** @type {((inputs?: Empty_Chat_TitleInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Chat_TitleInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_empty_chat_title(inputs)
	if (locale === "cs") return cs_empty_chat_title(inputs)
	if (locale === "sk") return sk_empty_chat_title(inputs)
	if (locale === "es") return es_empty_chat_title(inputs)
	if (locale === "de") return de_empty_chat_title(inputs)
	if (locale === "et") return et_empty_chat_title(inputs)
	if (locale === "fr") return fr_empty_chat_title(inputs)
	if (locale === "pl") return pl_empty_chat_title(inputs)
	if (locale === "hu") return hu_empty_chat_title(inputs)
	if (locale === "it") return it_empty_chat_title(inputs)
	if (locale === "lt") return lt_empty_chat_title(inputs)
	if (locale === "lv") return lv_empty_chat_title(inputs)
	if (locale === "nl") return nl_empty_chat_title(inputs)
	if (locale === "no") return no_empty_chat_title(inputs)
	if (locale === "pt") return pt_empty_chat_title(inputs)
	if (locale === "da") return da_empty_chat_title(inputs)
	if (locale === "sl") return sl_empty_chat_title(inputs)
	if (locale === "hr") return hr_empty_chat_title(inputs)
	if (locale === "sr") return sr_empty_chat_title(inputs)
	if (locale === "mk") return mk_empty_chat_title(inputs)
	if (locale === "ro") return ro_empty_chat_title(inputs)
	if (locale === "sv") return sv_empty_chat_title(inputs)
	if (locale === "fi") return fi_empty_chat_title(inputs)
	return en_empty_chat_title(inputs)
});