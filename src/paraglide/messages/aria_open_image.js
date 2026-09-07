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

/**
* | output |
* | --- |
* | "View image" |
*
* @param {Aria_Open_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_open_image = /** @type {((inputs?: Aria_Open_ImageInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Open_ImageInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_open_image(inputs)
	return en_aria_open_image(inputs)
});