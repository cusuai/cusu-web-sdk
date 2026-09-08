/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} HangupInputs */

const en_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hang up`)
};

const cs_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zavěsit`)
};

const sk_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zložiť`)
};

const es_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colgar`)
};

const de_hangup = /** @type {(inputs: HangupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auflegen`)
};

/**
* | output |
* | --- |
* | "Hang up" |
*
* @param {HangupInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const hangup = /** @type {((inputs?: HangupInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<HangupInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_hangup(inputs)
	if (locale === "sk") return sk_hangup(inputs)
	if (locale === "es") return es_hangup(inputs)
	if (locale === "de") return de_hangup(inputs)
	return en_hangup(inputs)
});