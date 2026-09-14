/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_New_ConversationInputs */

const en_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New conversation`)
};

const bg_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нов разговор`)
};

const cs_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nová konverzace`)
};

const sk_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nová konverzácia`)
};

const es_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva conversación`)
};

const de_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Unterhaltung`)
};

const et_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uus vestlus`)
};

const fr_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle conversation`)
};

const pl_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa rozmowa`)
};

const hu_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Új beszélgetés`)
};

const it_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova conversazione`)
};

const lt_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naujas pokalbis`)
};

const lv_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jauna saruna`)
};

const nl_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw gesprek`)
};

const no_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny samtale`)
};

const pt_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova conversa`)
};

const da_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny samtale`)
};

const sl_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nov pogovor`)
};

const hr_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novi razgovor`)
};

const ro_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversație nouă`)
};

const sv_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny konversation`)
};

const fi_aria_new_conversation = /** @type {(inputs: Aria_New_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uusi keskustelu`)
};

/**
* | output |
* | --- |
* | "New conversation" |
*
* @param {Aria_New_ConversationInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_new_conversation = /** @type {((inputs?: Aria_New_ConversationInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_New_ConversationInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_new_conversation(inputs)
	if (locale === "cs") return cs_aria_new_conversation(inputs)
	if (locale === "sk") return sk_aria_new_conversation(inputs)
	if (locale === "es") return es_aria_new_conversation(inputs)
	if (locale === "de") return de_aria_new_conversation(inputs)
	if (locale === "et") return et_aria_new_conversation(inputs)
	if (locale === "fr") return fr_aria_new_conversation(inputs)
	if (locale === "pl") return pl_aria_new_conversation(inputs)
	if (locale === "hu") return hu_aria_new_conversation(inputs)
	if (locale === "it") return it_aria_new_conversation(inputs)
	if (locale === "lt") return lt_aria_new_conversation(inputs)
	if (locale === "lv") return lv_aria_new_conversation(inputs)
	if (locale === "nl") return nl_aria_new_conversation(inputs)
	if (locale === "no") return no_aria_new_conversation(inputs)
	if (locale === "pt") return pt_aria_new_conversation(inputs)
	if (locale === "da") return da_aria_new_conversation(inputs)
	if (locale === "sl") return sl_aria_new_conversation(inputs)
	if (locale === "hr") return hr_aria_new_conversation(inputs)
	if (locale === "ro") return ro_aria_new_conversation(inputs)
	if (locale === "sv") return sv_aria_new_conversation(inputs)
	if (locale === "fi") return fi_aria_new_conversation(inputs)
	return en_aria_new_conversation(inputs)
});