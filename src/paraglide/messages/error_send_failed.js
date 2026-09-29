/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Send_FailedInputs */

const en_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't send this message.`)
};

const bg_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Съобщението не беше изпратено.`)
};

const cs_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zprávu se nepodařilo odeslat.`)
};

const sk_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Správu sa nepodarilo odoslať.`)
};

const es_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo enviar este mensaje.`)
};

const de_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachricht konnte nicht gesendet werden.`)
};

const et_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sõnumit ei õnnestunud saata.`)
};

const fr_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d'envoyer ce message.`)
};

const pl_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać wiadomości.`)
};

const hu_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nem sikerült elküldeni az üzenetet.`)
};

const it_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile inviare questo messaggio.`)
};

const lt_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nepavyko išsiųsti žinutės.`)
};

const lv_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neizdevās nosūtīt ziņu.`)
};

const nl_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bericht kon niet worden verzonden.`)
};

const no_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunne ikke sende meldingen.`)
};

const pt_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar esta mensagem.`)
};

const da_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunne ikke sende beskeden.`)
};

const sl_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sporočila ni bilo mogoče poslati.`)
};

const hr_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poruka nije poslana.`)
};

const sr_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poruka nije poslata.`)
};

const mk_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пораката не беше испратена.`)
};

const ro_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mesajul nu a putut fi trimis.`)
};

const sv_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte skicka meddelandet.`)
};

const fi_error_send_failed = /** @type {(inputs: Error_Send_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viestiä ei voitu lähettää.`)
};

/**
* | output |
* | --- |
* | "Couldn't send this message." |
*
* @param {Error_Send_FailedInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_send_failed = /** @type {((inputs?: Error_Send_FailedInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Send_FailedInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_error_send_failed(inputs)
	if (locale === "cs") return cs_error_send_failed(inputs)
	if (locale === "sk") return sk_error_send_failed(inputs)
	if (locale === "es") return es_error_send_failed(inputs)
	if (locale === "de") return de_error_send_failed(inputs)
	if (locale === "et") return et_error_send_failed(inputs)
	if (locale === "fr") return fr_error_send_failed(inputs)
	if (locale === "pl") return pl_error_send_failed(inputs)
	if (locale === "hu") return hu_error_send_failed(inputs)
	if (locale === "it") return it_error_send_failed(inputs)
	if (locale === "lt") return lt_error_send_failed(inputs)
	if (locale === "lv") return lv_error_send_failed(inputs)
	if (locale === "nl") return nl_error_send_failed(inputs)
	if (locale === "no") return no_error_send_failed(inputs)
	if (locale === "pt") return pt_error_send_failed(inputs)
	if (locale === "da") return da_error_send_failed(inputs)
	if (locale === "sl") return sl_error_send_failed(inputs)
	if (locale === "hr") return hr_error_send_failed(inputs)
	if (locale === "sr") return sr_error_send_failed(inputs)
	if (locale === "mk") return mk_error_send_failed(inputs)
	if (locale === "ro") return ro_error_send_failed(inputs)
	if (locale === "sv") return sv_error_send_failed(inputs)
	if (locale === "fi") return fi_error_send_failed(inputs)
	return en_error_send_failed(inputs)
});