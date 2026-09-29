/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Action_Retry_SendInputs */

const en_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const bg_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опитай отново`)
};

const cs_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zkusit znovu`)
};

const sk_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skúsiť znova`)
};

const es_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const et_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proovi uuesti`)
};

const fr_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const pl_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const hu_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Újra`)
};

const it_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const lt_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bandyti dar kartą`)
};

const lv_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mēģināt vēlreiz`)
};

const nl_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const no_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prøv igjen`)
};

const pt_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar novamente`)
};

const da_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prøv igen`)
};

const sl_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poskusi znova`)
};

const hr_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokušaj ponovo`)
};

const sr_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokušaj ponovo`)
};

const mk_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обиди се повторно`)
};

const ro_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Încearcă din nou`)
};

const sv_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const fi_action_retry_send = /** @type {(inputs: Action_Retry_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yritä uudelleen`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Action_Retry_SendInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const action_retry_send = /** @type {((inputs?: Action_Retry_SendInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Action_Retry_SendInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_action_retry_send(inputs)
	if (locale === "cs") return cs_action_retry_send(inputs)
	if (locale === "sk") return sk_action_retry_send(inputs)
	if (locale === "es") return es_action_retry_send(inputs)
	if (locale === "de") return de_action_retry_send(inputs)
	if (locale === "et") return et_action_retry_send(inputs)
	if (locale === "fr") return fr_action_retry_send(inputs)
	if (locale === "pl") return pl_action_retry_send(inputs)
	if (locale === "hu") return hu_action_retry_send(inputs)
	if (locale === "it") return it_action_retry_send(inputs)
	if (locale === "lt") return lt_action_retry_send(inputs)
	if (locale === "lv") return lv_action_retry_send(inputs)
	if (locale === "nl") return nl_action_retry_send(inputs)
	if (locale === "no") return no_action_retry_send(inputs)
	if (locale === "pt") return pt_action_retry_send(inputs)
	if (locale === "da") return da_action_retry_send(inputs)
	if (locale === "sl") return sl_action_retry_send(inputs)
	if (locale === "hr") return hr_action_retry_send(inputs)
	if (locale === "sr") return sr_action_retry_send(inputs)
	if (locale === "mk") return mk_action_retry_send(inputs)
	if (locale === "ro") return ro_action_retry_send(inputs)
	if (locale === "sv") return sv_action_retry_send(inputs)
	if (locale === "fi") return fi_action_retry_send(inputs)
	return en_action_retry_send(inputs)
});