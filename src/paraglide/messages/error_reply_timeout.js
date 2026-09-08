/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Reply_TimeoutInputs */

const en_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reply arrived. Try again.`)
};

const cs_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpověď nedorazila. Zkuste to znovu.`)
};

const sk_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpoveď neprišla. Skúste to znova.`)
};

const es_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No llegó ninguna respuesta. Inténtalo de nuevo.`)
};

const de_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es ist keine Antwort eingegangen. Versuchen Sie es erneut.`)
};

const fr_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune réponse n’est arrivée. Réessayez.`)
};

const pl_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedź nie nadeszła. Spróbuj ponownie.`)
};

const hu_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nem érkezett válasz. Próbálja újra.`)
};

const it_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è arrivata alcuna risposta. Riprova.`)
};

const nl_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is geen antwoord gekomen. Probeer het opnieuw.`)
};

const pt_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não chegou nenhuma resposta. Tenta novamente.`)
};

const da_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der kom intet svar. Prøv igen.`)
};

const sl_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odgovor ni prispel. Poskusite znova.`)
};

const hr_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odgovor nije stigao. Pokušajte ponovno.`)
};

const ro_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu a sosit niciun răspuns. Încercați din nou.`)
};

const sv_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget svar kom. Försök igen.`)
};

const fi_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vastausta ei saapunut. Yritä uudelleen.`)
};

/**
* | output |
* | --- |
* | "No reply arrived. Try again." |
*
* @param {Error_Reply_TimeoutInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_reply_timeout = /** @type {((inputs?: Error_Reply_TimeoutInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Reply_TimeoutInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_reply_timeout(inputs)
	if (locale === "sk") return sk_error_reply_timeout(inputs)
	if (locale === "es") return es_error_reply_timeout(inputs)
	if (locale === "de") return de_error_reply_timeout(inputs)
	if (locale === "fr") return fr_error_reply_timeout(inputs)
	if (locale === "pl") return pl_error_reply_timeout(inputs)
	if (locale === "hu") return hu_error_reply_timeout(inputs)
	if (locale === "it") return it_error_reply_timeout(inputs)
	if (locale === "nl") return nl_error_reply_timeout(inputs)
	if (locale === "pt") return pt_error_reply_timeout(inputs)
	if (locale === "da") return da_error_reply_timeout(inputs)
	if (locale === "sl") return sl_error_reply_timeout(inputs)
	if (locale === "hr") return hr_error_reply_timeout(inputs)
	if (locale === "ro") return ro_error_reply_timeout(inputs)
	if (locale === "sv") return sv_error_reply_timeout(inputs)
	if (locale === "fi") return fi_error_reply_timeout(inputs)
	return en_error_reply_timeout(inputs)
});