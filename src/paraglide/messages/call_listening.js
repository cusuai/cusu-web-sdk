/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_ListeningInputs */

const en_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listening — you can speak`)
};

const bg_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слушам — можете да говорите`)
};

const cs_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poslouchám — můžete mluvit`)
};

const sk_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Počúvam — môžete hovoriť`)
};

const es_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escuchando — puedes hablar`)
};

const de_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich höre zu — Sie können sprechen`)
};

const et_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuulan — võite rääkida`)
};

const fr_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je vous écoute — vous pouvez parler`)
};

const pl_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Słucham — możesz mówić`)
};

const hu_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Figyelek — beszélhet`)
};

const it_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ti ascolto — puoi parlare`)
};

const lt_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klausau — galite kalbėti`)
};

const lv_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klausos — varat runāt`)
};

const nl_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik luister — je kunt praten`)
};

const no_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lytter — du kan snakke`)
};

const pt_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estou a ouvir — podes falar`)
};

const da_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeg lytter — du kan tale`)
};

const sl_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poslušam — lahko govorite`)
};

const hr_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slušam — možete govoriti`)
};

const ro_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vă ascult — puteți vorbi`)
};

const sv_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag lyssnar — du kan prata`)
};

const fi_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuuntelen — voit puhua`)
};

/**
* | output |
* | --- |
* | "Listening — you can speak" |
*
* @param {Call_ListeningInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const call_listening = /** @type {((inputs?: Call_ListeningInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_ListeningInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_call_listening(inputs)
	if (locale === "cs") return cs_call_listening(inputs)
	if (locale === "sk") return sk_call_listening(inputs)
	if (locale === "es") return es_call_listening(inputs)
	if (locale === "de") return de_call_listening(inputs)
	if (locale === "et") return et_call_listening(inputs)
	if (locale === "fr") return fr_call_listening(inputs)
	if (locale === "pl") return pl_call_listening(inputs)
	if (locale === "hu") return hu_call_listening(inputs)
	if (locale === "it") return it_call_listening(inputs)
	if (locale === "lt") return lt_call_listening(inputs)
	if (locale === "lv") return lv_call_listening(inputs)
	if (locale === "nl") return nl_call_listening(inputs)
	if (locale === "no") return no_call_listening(inputs)
	if (locale === "pt") return pt_call_listening(inputs)
	if (locale === "da") return da_call_listening(inputs)
	if (locale === "sl") return sl_call_listening(inputs)
	if (locale === "hr") return hr_call_listening(inputs)
	if (locale === "ro") return ro_call_listening(inputs)
	if (locale === "sv") return sv_call_listening(inputs)
	if (locale === "fi") return fi_call_listening(inputs)
	return en_call_listening(inputs)
});