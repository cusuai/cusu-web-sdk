/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Gallery_NextInputs */

const en_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next image`)
};

const cs_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Další obrázek`)
};

const sk_aria_gallery_next = /** @type {(inputs: Aria_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasledujúci obrázok`)
};

/**
* | output |
* | --- |
* | "Next image" |
*
* @param {Aria_Gallery_NextInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_gallery_next = /** @type {((inputs?: Aria_Gallery_NextInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Gallery_NextInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_gallery_next(inputs)
	if (locale === "sk") return sk_aria_gallery_next(inputs)
	return en_aria_gallery_next(inputs)
});