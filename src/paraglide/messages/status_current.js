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

/**
* | output |
* | --- |
* | "current" |
*
* @param {Status_CurrentInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const status_current = /** @type {((inputs?: Status_CurrentInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_CurrentInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_current(inputs)
	return en_status_current(inputs)
});