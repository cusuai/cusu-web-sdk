/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Conversation_GoneInputs */

const en_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This conversation no longer exists.`)
};

const bg_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Този разговор вече не съществува.`)
};

const cs_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzace už neexistuje.`)
};

const sk_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konverzácia už neexistuje.`)
};

const es_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conversación ya no existe.`)
};

const de_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Unterhaltung existiert nicht mehr.`)
};

const et_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seda vestlust pole enam olemas.`)
};

const fr_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette conversation n’existe plus.`)
};

const pl_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta rozmowa już nie istnieje.`)
};

const hu_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ez a beszélgetés már nem létezik.`)
};

const it_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa conversazione non esiste più.`)
};

const lt_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Šio pokalbio nebėra.`)
};

const lv_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Šī saruna vairs nepastāv.`)
};

const nl_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit gesprek bestaat niet meer.`)
};

const no_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denne samtalen finnes ikke lenger.`)
};

const pt_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conversa já não existe.`)
};

const da_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denne samtale findes ikke længere.`)
};

const sl_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta pogovor ne obstaja več.`)
};

const hr_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ovaj razgovor više ne postoji.`)
};

const ro_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Această conversație nu mai există.`)
};

const sv_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här konversationen finns inte längre.`)
};

const fi_error_conversation_gone = /** @type {(inputs: Error_Conversation_GoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tätä keskustelua ei enää ole.`)
};

/**
* | output |
* | --- |
* | "This conversation no longer exists." |
*
* @param {Error_Conversation_GoneInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_conversation_gone = /** @type {((inputs?: Error_Conversation_GoneInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Conversation_GoneInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_error_conversation_gone(inputs)
	if (locale === "cs") return cs_error_conversation_gone(inputs)
	if (locale === "sk") return sk_error_conversation_gone(inputs)
	if (locale === "es") return es_error_conversation_gone(inputs)
	if (locale === "de") return de_error_conversation_gone(inputs)
	if (locale === "et") return et_error_conversation_gone(inputs)
	if (locale === "fr") return fr_error_conversation_gone(inputs)
	if (locale === "pl") return pl_error_conversation_gone(inputs)
	if (locale === "hu") return hu_error_conversation_gone(inputs)
	if (locale === "it") return it_error_conversation_gone(inputs)
	if (locale === "lt") return lt_error_conversation_gone(inputs)
	if (locale === "lv") return lv_error_conversation_gone(inputs)
	if (locale === "nl") return nl_error_conversation_gone(inputs)
	if (locale === "no") return no_error_conversation_gone(inputs)
	if (locale === "pt") return pt_error_conversation_gone(inputs)
	if (locale === "da") return da_error_conversation_gone(inputs)
	if (locale === "sl") return sl_error_conversation_gone(inputs)
	if (locale === "hr") return hr_error_conversation_gone(inputs)
	if (locale === "ro") return ro_error_conversation_gone(inputs)
	if (locale === "sv") return sv_error_conversation_gone(inputs)
	if (locale === "fi") return fi_error_conversation_gone(inputs)
	return en_error_conversation_gone(inputs)
});