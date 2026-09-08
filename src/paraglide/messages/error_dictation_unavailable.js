/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Dictation_UnavailableInputs */

const en_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dictation is not available in this browser.`)
};

const cs_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktování v tomto prohlížeči není dostupné.`)
};

const sk_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktovanie nie je v tomto prehliadači dostupné.`)
};

const es_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El dictado no está disponible en este navegador.`)
};

const de_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Diktierfunktion ist in diesem Browser nicht verfügbar.`)
};

const fr_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La dictée n’est pas disponible dans ce navigateur.`)
};

const pl_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dyktowanie nie jest dostępne w tej przeglądarce.`)
};

const hu_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A diktálás nem érhető el ebben a böngészőben.`)
};

const it_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La dettatura non è disponibile in questo browser.`)
};

const nl_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dicteren is niet beschikbaar in deze browser.`)
};

const pt_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O ditado não está disponível neste navegador.`)
};

const da_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktering er ikke tilgængelig i denne browser.`)
};

const sl_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Narekovanje v tem brskalniku ni na voljo.`)
};

const hr_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktiranje nije dostupno u ovom pregledniku.`)
};

const ro_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dictarea nu este disponibilă în acest browser.`)
};

const sv_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diktering är inte tillgänglig i den här webbläsaren.`)
};

const fi_error_dictation_unavailable = /** @type {(inputs: Error_Dictation_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanelu ei ole käytettävissä tässä selaimessa.`)
};

/**
* | output |
* | --- |
* | "Dictation is not available in this browser." |
*
* @param {Error_Dictation_UnavailableInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_dictation_unavailable = /** @type {((inputs?: Error_Dictation_UnavailableInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Dictation_UnavailableInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_dictation_unavailable(inputs)
	if (locale === "sk") return sk_error_dictation_unavailable(inputs)
	if (locale === "es") return es_error_dictation_unavailable(inputs)
	if (locale === "de") return de_error_dictation_unavailable(inputs)
	if (locale === "fr") return fr_error_dictation_unavailable(inputs)
	if (locale === "pl") return pl_error_dictation_unavailable(inputs)
	if (locale === "hu") return hu_error_dictation_unavailable(inputs)
	if (locale === "it") return it_error_dictation_unavailable(inputs)
	if (locale === "nl") return nl_error_dictation_unavailable(inputs)
	if (locale === "pt") return pt_error_dictation_unavailable(inputs)
	if (locale === "da") return da_error_dictation_unavailable(inputs)
	if (locale === "sl") return sl_error_dictation_unavailable(inputs)
	if (locale === "hr") return hr_error_dictation_unavailable(inputs)
	if (locale === "ro") return ro_error_dictation_unavailable(inputs)
	if (locale === "sv") return sv_error_dictation_unavailable(inputs)
	if (locale === "fi") return fi_error_dictation_unavailable(inputs)
	return en_error_dictation_unavailable(inputs)
});