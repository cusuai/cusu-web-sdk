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

const fr_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous pouvez joindre jusqu’à 5 fichiers par message.`)
};

const pl_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Możesz załączyć maksymalnie 5 plików do jednej wiadomości.`)
};

const hu_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üzenetenként legfeljebb 5 fájlt csatolhat.`)
};

const it_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puoi allegare fino a 5 file per messaggio.`)
};

const nl_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt maximaal 5 bestanden per bericht bijvoegen.`)
};

const pt_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podes anexar até 5 ficheiros por mensagem.`)
};

const da_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan vedhæfte op til 5 filer pr. besked.`)
};

const sl_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vsakemu sporočilu lahko priložite največ 5 datotek.`)
};

const hr_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uz poruku možete priložiti najviše 5 datoteka.`)
};

const ro_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puteți atașa până la 5 fișiere per mesaj.`)
};

const sv_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan bifoga upp till 5 filer per meddelande.`)
};

const fi_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voit liittää enintään 5 tiedostoa viestiä kohden.`)
};

/**
* | output |
* | --- |
* | "You can attach up to 5 files per message." |
*
* @param {Error_Too_Many_FilesInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_too_many_files = /** @type {((inputs?: Error_Too_Many_FilesInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Too_Many_FilesInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_too_many_files(inputs)
	if (locale === "sk") return sk_error_too_many_files(inputs)
	if (locale === "es") return es_error_too_many_files(inputs)
	if (locale === "de") return de_error_too_many_files(inputs)
	if (locale === "fr") return fr_error_too_many_files(inputs)
	if (locale === "pl") return pl_error_too_many_files(inputs)
	if (locale === "hu") return hu_error_too_many_files(inputs)
	if (locale === "it") return it_error_too_many_files(inputs)
	if (locale === "nl") return nl_error_too_many_files(inputs)
	if (locale === "pt") return pt_error_too_many_files(inputs)
	if (locale === "da") return da_error_too_many_files(inputs)
	if (locale === "sl") return sl_error_too_many_files(inputs)
	if (locale === "hr") return hr_error_too_many_files(inputs)
	if (locale === "ro") return ro_error_too_many_files(inputs)
	if (locale === "sv") return sv_error_too_many_files(inputs)
	if (locale === "fi") return fi_error_too_many_files(inputs)
	return en_error_too_many_files(inputs)
});