/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_CloseInputs */

const en_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const cs_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zavřít`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Aria_CloseInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_close = /** @type {((inputs?: Aria_CloseInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_CloseInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_close(inputs)
	return en_aria_close(inputs)
});