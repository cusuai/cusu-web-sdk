/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Rating_ThanksInputs */

const en_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks for the rating.`)
};

const cs_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Díky za hodnocení.`)
};

const sk_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ďakujeme za hodnotenie.`)
};

const es_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias por tu valoración.`)
};

const de_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vielen Dank für Ihre Bewertung.`)
};

const fr_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci pour votre évaluation.`)
};

const pl_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziękujemy za ocenę.`)
};

const hu_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Köszönjük az értékelést.`)
};

const it_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie per la valutazione.`)
};

const nl_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt voor je beoordeling.`)
};

const pt_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigado pela avaliação.`)
};

const da_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tak for din bedømmelse.`)
};

const sl_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hvala za vašo oceno.`)
};

const hr_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hvala vam na ocjeni.`)
};

const ro_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vă mulțumim pentru evaluare.`)
};

const sv_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack för ditt omdöme.`)
};

const fi_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiitos arviostasi.`)
};

/**
* | output |
* | --- |
* | "Thanks for the rating." |
*
* @param {Rating_ThanksInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const rating_thanks = /** @type {((inputs?: Rating_ThanksInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Rating_ThanksInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_rating_thanks(inputs)
	if (locale === "sk") return sk_rating_thanks(inputs)
	if (locale === "es") return es_rating_thanks(inputs)
	if (locale === "de") return de_rating_thanks(inputs)
	if (locale === "fr") return fr_rating_thanks(inputs)
	if (locale === "pl") return pl_rating_thanks(inputs)
	if (locale === "hu") return hu_rating_thanks(inputs)
	if (locale === "it") return it_rating_thanks(inputs)
	if (locale === "nl") return nl_rating_thanks(inputs)
	if (locale === "pt") return pt_rating_thanks(inputs)
	if (locale === "da") return da_rating_thanks(inputs)
	if (locale === "sl") return sl_rating_thanks(inputs)
	if (locale === "hr") return hr_rating_thanks(inputs)
	if (locale === "ro") return ro_rating_thanks(inputs)
	if (locale === "sv") return sv_rating_thanks(inputs)
	if (locale === "fi") return fi_rating_thanks(inputs)
	return en_rating_thanks(inputs)
});