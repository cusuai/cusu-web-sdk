/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Placeholder_MessageInputs */

const en_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message…`)
};

const cs_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zpráva…`)
};

const sk_placeholder_message = /** @type {(inputs: Placeholder_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Správa…`)
};

/**
* | output |
* | --- |
* | "Message…" |
*
* @param {Placeholder_MessageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const placeholder_message = /** @type {((inputs?: Placeholder_MessageInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Placeholder_MessageInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_placeholder_message(inputs)
	if (locale === "sk") return sk_placeholder_message(inputs)
	return en_placeholder_message(inputs)
});