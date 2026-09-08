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

const sk_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Píše…`)
};

const es_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribiendo…`)
};

const de_typing = /** @type {(inputs: TypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreibt…`)
};

/**
* | output |
* | --- |
* | "Typing…" |
*
* @param {TypingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const typing = /** @type {((inputs?: TypingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TypingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_typing(inputs)
	if (locale === "sk") return sk_typing(inputs)
	if (locale === "es") return es_typing(inputs)
	if (locale === "de") return de_typing(inputs)
	return en_typing(inputs)
});