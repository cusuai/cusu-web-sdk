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

const es_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué tal lo hemos hecho?`)
};

const de_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie zufrieden waren Sie?`)
};

const fr_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment avons-nous fait ?`)
};

const pl_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak nam poszło?`)
};

const hu_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hogyan teljesítettünk?`)
};

const it_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come è andata?`)
};

const nl_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe hebben we het gedaan?`)
};

const pt_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como correu?`)
};

const da_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hvordan klarede vi det?`)
};

const sl_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kako smo se odrezali?`)
};

const hr_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kako smo se pokazali?`)
};

const ro_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cum ne-am descurcat?`)
};

const sv_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur gick det?`)
};

const fi_rating_prompt = /** @type {(inputs: Rating_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miten onnistuimme?`)
};

/**
* | output |
* | --- |
* | "How did we do?" |
*
* @param {Rating_PromptInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const rating_prompt = /** @type {((inputs?: Rating_PromptInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Rating_PromptInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_rating_prompt(inputs)
	if (locale === "sk") return sk_rating_prompt(inputs)
	if (locale === "es") return es_rating_prompt(inputs)
	if (locale === "de") return de_rating_prompt(inputs)
	if (locale === "fr") return fr_rating_prompt(inputs)
	if (locale === "pl") return pl_rating_prompt(inputs)
	if (locale === "hu") return hu_rating_prompt(inputs)
	if (locale === "it") return it_rating_prompt(inputs)
	if (locale === "nl") return nl_rating_prompt(inputs)
	if (locale === "pt") return pt_rating_prompt(inputs)
	if (locale === "da") return da_rating_prompt(inputs)
	if (locale === "sl") return sl_rating_prompt(inputs)
	if (locale === "hr") return hr_rating_prompt(inputs)
	if (locale === "ro") return ro_rating_prompt(inputs)
	if (locale === "sv") return sv_rating_prompt(inputs)
	if (locale === "fi") return fi_rating_prompt(inputs)
	return en_rating_prompt(inputs)
});