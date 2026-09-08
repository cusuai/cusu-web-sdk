/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Open_ChatInputs */

const en_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open chat`)
};

const cs_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otevřít chat`)
};

const sk_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otvoriť chat`)
};

const es_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir chat`)
};

const de_aria_open_chat = /** @type {(inputs: Aria_Open_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat öffnen`)
};

/**
* | output |
* | --- |
* | "Open chat" |
*
* @param {Aria_Open_ChatInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_open_chat = /** @type {((inputs?: Aria_Open_ChatInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Open_ChatInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_open_chat(inputs)
	if (locale === "sk") return sk_aria_open_chat(inputs)
	if (locale === "es") return es_aria_open_chat(inputs)
	if (locale === "de") return de_aria_open_chat(inputs)
	return en_aria_open_chat(inputs)
});