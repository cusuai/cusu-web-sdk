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

/**
* | output |
* | --- |
* | "Send" |
*
* @param {Aria_SendInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_send = /** @type {((inputs?: Aria_SendInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_SendInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_send(inputs)
	if (locale === "sk") return sk_aria_send(inputs)
	return en_aria_send(inputs)
});