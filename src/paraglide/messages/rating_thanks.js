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

/**
* | output |
* | --- |
* | "Thanks for the rating." |
*
* @param {Rating_ThanksInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const rating_thanks = /** @type {((inputs?: Rating_ThanksInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Rating_ThanksInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_rating_thanks(inputs)
	if (locale === "sk") return sk_rating_thanks(inputs)
	return en_rating_thanks(inputs)
});