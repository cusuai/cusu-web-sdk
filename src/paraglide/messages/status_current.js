/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_CurrentInputs */

const en_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`current`)
};

const cs_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuální`)
};

const sk_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuálne`)
};

/**
* | output |
* | --- |
* | "current" |
*
* @param {Status_CurrentInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const status_current = /** @type {((inputs?: Status_CurrentInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_CurrentInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_current(inputs)
	if (locale === "sk") return sk_status_current(inputs)
	return en_status_current(inputs)
});