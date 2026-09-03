/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_MessageInputs */

const en_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

const cs_aria_message = /** @type {(inputs: Aria_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zpráva`)
};

/**
* | output |
* | --- |
* | "Message" |
*
* @param {Aria_MessageInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_message = /** @type {((inputs?: Aria_MessageInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_MessageInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_message(inputs)
	return en_aria_message(inputs)
});