/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_History_AskInputs */

const en_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask something`)
};

const bg_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Задайте въпрос`)
};

const cs_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeptat se`)
};

const sk_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opýtať sa`)
};

const es_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hacer una pregunta`)
};

const de_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frage stellen`)
};

const et_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küsi midagi`)
};

const fr_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poser une question`)
};

const pl_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadaj pytanie`)
};

const hu_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kérdés feltevése`)
};

const it_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fai una domanda`)
};

const lt_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Užduoti klausimą`)
};

const lv_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uzdot jautājumu`)
};

const nl_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stel een vraag`)
};

const no_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Still et spørsmål`)
};

const pt_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fazer uma pergunta`)
};

const da_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stil et spørgsmål`)
};

const sl_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postavite vprašanje`)
};

const hr_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postavite pitanje`)
};

const sr_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postavite pitanje`)
};

const mk_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поставете прашање`)
};

const ro_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresați o întrebare`)
};

const sv_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ställ en fråga`)
};

const fi_empty_history_ask = /** @type {(inputs: Empty_History_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kysy jotain`)
};

/**
* | output |
* | --- |
* | "Ask something" |
*
* @param {Empty_History_AskInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const empty_history_ask = /** @type {((inputs?: Empty_History_AskInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_History_AskInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_empty_history_ask(inputs)
	if (locale === "cs") return cs_empty_history_ask(inputs)
	if (locale === "sk") return sk_empty_history_ask(inputs)
	if (locale === "es") return es_empty_history_ask(inputs)
	if (locale === "de") return de_empty_history_ask(inputs)
	if (locale === "et") return et_empty_history_ask(inputs)
	if (locale === "fr") return fr_empty_history_ask(inputs)
	if (locale === "pl") return pl_empty_history_ask(inputs)
	if (locale === "hu") return hu_empty_history_ask(inputs)
	if (locale === "it") return it_empty_history_ask(inputs)
	if (locale === "lt") return lt_empty_history_ask(inputs)
	if (locale === "lv") return lv_empty_history_ask(inputs)
	if (locale === "nl") return nl_empty_history_ask(inputs)
	if (locale === "no") return no_empty_history_ask(inputs)
	if (locale === "pt") return pt_empty_history_ask(inputs)
	if (locale === "da") return da_empty_history_ask(inputs)
	if (locale === "sl") return sl_empty_history_ask(inputs)
	if (locale === "hr") return hr_empty_history_ask(inputs)
	if (locale === "sr") return sr_empty_history_ask(inputs)
	if (locale === "mk") return mk_empty_history_ask(inputs)
	if (locale === "ro") return ro_empty_history_ask(inputs)
	if (locale === "sv") return sv_empty_history_ask(inputs)
	if (locale === "fi") return fi_empty_history_ask(inputs)
	return en_empty_history_ask(inputs)
});