/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Remove_AttachmentInputs */

const en_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove attachment`)
};

const cs_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odebrat přílohu`)
};

const sk_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odobrať prílohu`)
};

const es_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar archivo adjunto`)
};

const de_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anhang entfernen`)
};

/**
* | output |
* | --- |
* | "Remove attachment" |
*
* @param {Aria_Remove_AttachmentInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_remove_attachment = /** @type {((inputs?: Aria_Remove_AttachmentInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Remove_AttachmentInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_remove_attachment(inputs)
	if (locale === "sk") return sk_aria_remove_attachment(inputs)
	if (locale === "es") return es_aria_remove_attachment(inputs)
	if (locale === "de") return de_aria_remove_attachment(inputs)
	return en_aria_remove_attachment(inputs)
});