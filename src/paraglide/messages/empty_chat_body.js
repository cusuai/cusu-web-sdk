/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_Chat_BodyInputs */

const en_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sizing, delivery, or just a gut check — ask away. We've got you.`)
};

const cs_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Velikost, doručení, nebo jen pocit, že si nejsi jistý — klidně se zeptej. Jsme v tom s tebou.`)
};

const sk_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veľkosť, doručenie alebo len overenie — pokojne sa opýtajte. Sme v tom s vami.`)
};

/**
* | output |
* | --- |
* | "Sizing, delivery, or just a gut check — ask away. We've got you." |
*
* @param {Empty_Chat_BodyInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const empty_chat_body = /** @type {((inputs?: Empty_Chat_BodyInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Chat_BodyInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_chat_body(inputs)
	if (locale === "sk") return sk_empty_chat_body(inputs)
	return en_empty_chat_body(inputs)
});