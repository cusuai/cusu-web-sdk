/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Rating_PromptInputs */

const en_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How did we do?`)
};

const cs_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak jsme to zvládli?`)
};

const sk_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ako sme to zvládli?`)
};

/**
* | output |
* | --- |
* | "How did we do?" |
*
* @param {Rating_PromptInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const rating_prompt = /** @type {((inputs?: Rating_PromptInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Rating_PromptInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_rating_prompt(inputs)
	if (locale === "sk") return sk_rating_prompt(inputs)
	return en_rating_prompt(inputs)
});