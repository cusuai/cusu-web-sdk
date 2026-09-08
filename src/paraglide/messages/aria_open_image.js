/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Open_ImageInputs */

const en_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View image`)
};

const cs_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobrazit obrázek`)
};

const sk_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobraziť obrázok`)
};

const es_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver imagen`)
};

const de_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild ansehen`)
};

/**
* | output |
* | --- |
* | "View image" |
*
* @param {Aria_Open_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_open_image = /** @type {((inputs?: Aria_Open_ImageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Open_ImageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_open_image(inputs)
	if (locale === "sk") return sk_aria_open_image(inputs)
	if (locale === "es") return es_aria_open_image(inputs)
	if (locale === "de") return de_aria_open_image(inputs)
	return en_aria_open_image(inputs)
});