/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_HangupInputs */

const en_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hang up`)
};

const cs_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zavěsit`)
};

const sk_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zložiť`)
};

const es_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colgar`)
};

const de_aria_hangup = /** @type {(inputs: Aria_HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auflegen`)
};

/**
* | output |
* | --- |
* | "Hang up" |
*
* @param {Aria_HangupInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_hangup = /** @type {((inputs?: Aria_HangupInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_HangupInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_hangup(inputs)
	if (locale === "sk") return sk_aria_hangup(inputs)
	if (locale === "es") return es_aria_hangup(inputs)
	if (locale === "de") return de_aria_hangup(inputs)
	return en_aria_hangup(inputs)
});