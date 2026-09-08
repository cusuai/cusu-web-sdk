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

const es_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`actual`)
};

const de_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuell`)
};

/**
* | output |
* | --- |
* | "current" |
*
* @param {Status_CurrentInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const status_current = /** @type {((inputs?: Status_CurrentInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_CurrentInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_current(inputs)
	if (locale === "sk") return sk_status_current(inputs)
	if (locale === "es") return es_status_current(inputs)
	if (locale === "de") return de_status_current(inputs)
	return en_status_current(inputs)
});