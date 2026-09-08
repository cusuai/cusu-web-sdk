/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_AttachInputs */

const en_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach a file`)
};

const cs_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přiložit soubor`)
};

const sk_aria_attach = /** @type {(inputs: Aria_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priložiť súbor`)
};

/**
* | output |
* | --- |
* | "Attach a file" |
*
* @param {Aria_AttachInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_attach = /** @type {((inputs?: Aria_AttachInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_AttachInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_attach(inputs)
	if (locale === "sk") return sk_aria_attach(inputs)
	return en_aria_attach(inputs)
});