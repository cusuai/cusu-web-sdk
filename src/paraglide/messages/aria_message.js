/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_MessageInputs */

const en_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

const bg_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Съобщение`)
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

const et_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sõnum`)
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

const lt_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Žinutė`)
};

const lv_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziņa`)
};

const nl_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bericht`)
};

const no_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melding`)
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

const sr_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poruka`)
};

const mk_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Порака`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_message = /** @type {((inputs?: Aria_MessageInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_MessageInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_message(inputs)
	if (locale === "cs") return cs_aria_message(inputs)
	if (locale === "sk") return sk_aria_message(inputs)
	if (locale === "es") return es_aria_message(inputs)
	if (locale === "de") return de_aria_message(inputs)
	if (locale === "et") return et_aria_message(inputs)
	if (locale === "fr") return fr_aria_message(inputs)
	if (locale === "pl") return pl_aria_message(inputs)
	if (locale === "hu") return hu_aria_message(inputs)
	if (locale === "it") return it_aria_message(inputs)
	if (locale === "lt") return lt_aria_message(inputs)
	if (locale === "lv") return lv_aria_message(inputs)
	if (locale === "nl") return nl_aria_message(inputs)
	if (locale === "no") return no_aria_message(inputs)
	if (locale === "pt") return pt_aria_message(inputs)
	if (locale === "da") return da_aria_message(inputs)
	if (locale === "sl") return sl_aria_message(inputs)
	if (locale === "hr") return hr_aria_message(inputs)
	if (locale === "sr") return sr_aria_message(inputs)
	if (locale === "mk") return mk_aria_message(inputs)
	if (locale === "ro") return ro_aria_message(inputs)
	if (locale === "sv") return sv_aria_message(inputs)
	if (locale === "fi") return fi_aria_message(inputs)
	return en_aria_message(inputs)
});