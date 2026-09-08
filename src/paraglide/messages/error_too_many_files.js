/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Too_Many_FilesInputs */

const en_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can attach up to 5 files per message.`)
};

const cs_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ke zprávě lze přiložit nejvýš 5 souborů.`)
};

const sk_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`K správe môžete priložiť najviac 5 súborov.`)
};

const es_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puedes adjuntar hasta 5 archivos por mensaje.`)
};

const de_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie können bis zu 5 Dateien pro Nachricht anhängen.`)
};

/**
* | output |
* | --- |
* | "You can attach up to 5 files per message." |
*
* @param {Error_Too_Many_FilesInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const error_too_many_files = /** @type {((inputs?: Error_Too_Many_FilesInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Too_Many_FilesInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_too_many_files(inputs)
	if (locale === "sk") return sk_error_too_many_files(inputs)
	if (locale === "es") return es_error_too_many_files(inputs)
	if (locale === "de") return de_error_too_many_files(inputs)
	return en_error_too_many_files(inputs)
});