/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_SendInputs */

const en_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send`)
};

const cs_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odeslat`)
};

const sk_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odoslať`)
};

const es_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar`)
};

const de_aria_send = /** @type {(inputs: Aria_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senden`)
};

/**
* | output |
* | --- |
* | "Send" |
*
* @param {Aria_SendInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_send = /** @type {((inputs?: Aria_SendInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_SendInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_send(inputs)
	if (locale === "sk") return sk_aria_send(inputs)
	if (locale === "es") return es_aria_send(inputs)
	if (locale === "de") return de_aria_send(inputs)
	return en_aria_send(inputs)
});