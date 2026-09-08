/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Reply_TimeoutInputs */

const en_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reply arrived. Try again.`)
};

const cs_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpověď nedorazila. Zkuste to znovu.`)
};

const sk_error_reply_timeout = /** @type {(inputs: Error_Reply_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpoveď neprišla. Skúste to znova.`)
};

/**
* | output |
* | --- |
* | "No reply arrived. Try again." |
*
* @param {Error_Reply_TimeoutInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_reply_timeout = /** @type {((inputs?: Error_Reply_TimeoutInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Reply_TimeoutInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_reply_timeout(inputs)
	if (locale === "sk") return sk_error_reply_timeout(inputs)
	return en_error_reply_timeout(inputs)
});