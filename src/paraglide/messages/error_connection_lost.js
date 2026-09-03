/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Connection_LostInputs */

const en_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connection lost. Try again.`)
};

const cs_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Připojení se ztratilo. Zkuste to znovu.`)
};

/**
* | output |
* | --- |
* | "Connection lost. Try again." |
*
* @param {Error_Connection_LostInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_connection_lost = /** @type {((inputs?: Error_Connection_LostInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Connection_LostInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_connection_lost(inputs)
	return en_error_connection_lost(inputs)
});