/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Gallery_PrevInputs */

const en_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous image`)
};

const cs_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Předchozí obrázek`)
};

const sk_aria_gallery_prev = /** @type {(inputs: Aria_Gallery_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Predchádzajúci obrázok`)
};

/**
* | output |
* | --- |
* | "Previous image" |
*
* @param {Aria_Gallery_PrevInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_gallery_prev = /** @type {((inputs?: Aria_Gallery_PrevInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Gallery_PrevInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_gallery_prev(inputs)
	if (locale === "sk") return sk_aria_gallery_prev(inputs)
	return en_aria_gallery_prev(inputs)
});