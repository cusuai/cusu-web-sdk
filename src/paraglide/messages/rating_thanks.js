/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Rating_ThanksInputs */

const en_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks for the rating.`)
};

const bg_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Благодарим за оценката.`)
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

const et_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Täname hinnangu eest.`)
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

const lt_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dėkojame už įvertinimą.`)
};

const lv_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paldies par vērtējumu.`)
};

const nl_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt voor je beoordeling.`)
};

const no_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takk for vurderingen.`)
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

const sr_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hvala vam na oceni.`)
};

const mk_rating_thanks = /** @type {(inputs: Rating_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ви благодариме за оценката.`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const rating_thanks = /** @type {((inputs?: Rating_ThanksInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Rating_ThanksInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_rating_thanks(inputs)
	if (locale === "cs") return cs_rating_thanks(inputs)
	if (locale === "sk") return sk_rating_thanks(inputs)
	if (locale === "es") return es_rating_thanks(inputs)
	if (locale === "de") return de_rating_thanks(inputs)
	if (locale === "et") return et_rating_thanks(inputs)
	if (locale === "fr") return fr_rating_thanks(inputs)
	if (locale === "pl") return pl_rating_thanks(inputs)
	if (locale === "hu") return hu_rating_thanks(inputs)
	if (locale === "it") return it_rating_thanks(inputs)
	if (locale === "lt") return lt_rating_thanks(inputs)
	if (locale === "lv") return lv_rating_thanks(inputs)
	if (locale === "nl") return nl_rating_thanks(inputs)
	if (locale === "no") return no_rating_thanks(inputs)
	if (locale === "pt") return pt_rating_thanks(inputs)
	if (locale === "da") return da_rating_thanks(inputs)
	if (locale === "sl") return sl_rating_thanks(inputs)
	if (locale === "hr") return hr_rating_thanks(inputs)
	if (locale === "sr") return sr_rating_thanks(inputs)
	if (locale === "mk") return mk_rating_thanks(inputs)
	if (locale === "ro") return ro_rating_thanks(inputs)
	if (locale === "sv") return sv_rating_thanks(inputs)
	if (locale === "fi") return fi_rating_thanks(inputs)
	return en_rating_thanks(inputs)
});