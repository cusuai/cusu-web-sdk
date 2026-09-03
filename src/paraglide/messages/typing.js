/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TypingInputs */

const en_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typing…`)
};

const cs_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Píše…`)
};

/**
* | output |
* | --- |
* | "Typing…" |
*
* @param {TypingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const typing = /** @type {((inputs?: TypingInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TypingInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_typing(inputs)
	return en_typing(inputs)
});