/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Too_Many_FilesInputs */

const en_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can attach up to 5 files per message.`)
};

const bg_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можете да прикачите до 5 файла към едно съобщение.`)
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

const et_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ühele sõnumile saate lisada kuni 5 faili.`)
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

const lt_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prie vienos žinutės galite pridėti iki 5 failų.`)
};

const lv_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vienai ziņai varat pievienot līdz 5 failiem.`)
};

const nl_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt maximaal 5 bestanden per bericht bijvoegen.`)
};

const no_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan legge ved opptil 5 filer per melding.`)
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

const sr_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uz poruku možete da priložite najviše 5 datoteka.`)
};

const mk_error_too_many_files = /** @type {(inputs: Error_Too_Many_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Може да прикачите најмногу 5 датотеки во една порака.`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_too_many_files = /** @type {((inputs?: Error_Too_Many_FilesInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Too_Many_FilesInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_error_too_many_files(inputs)
	if (locale === "cs") return cs_error_too_many_files(inputs)
	if (locale === "sk") return sk_error_too_many_files(inputs)
	if (locale === "es") return es_error_too_many_files(inputs)
	if (locale === "de") return de_error_too_many_files(inputs)
	if (locale === "et") return et_error_too_many_files(inputs)
	if (locale === "fr") return fr_error_too_many_files(inputs)
	if (locale === "pl") return pl_error_too_many_files(inputs)
	if (locale === "hu") return hu_error_too_many_files(inputs)
	if (locale === "it") return it_error_too_many_files(inputs)
	if (locale === "lt") return lt_error_too_many_files(inputs)
	if (locale === "lv") return lv_error_too_many_files(inputs)
	if (locale === "nl") return nl_error_too_many_files(inputs)
	if (locale === "no") return no_error_too_many_files(inputs)
	if (locale === "pt") return pt_error_too_many_files(inputs)
	if (locale === "da") return da_error_too_many_files(inputs)
	if (locale === "sl") return sl_error_too_many_files(inputs)
	if (locale === "hr") return hr_error_too_many_files(inputs)
	if (locale === "sr") return sr_error_too_many_files(inputs)
	if (locale === "mk") return mk_error_too_many_files(inputs)
	if (locale === "ro") return ro_error_too_many_files(inputs)
	if (locale === "sv") return sv_error_too_many_files(inputs)
	if (locale === "fi") return fi_error_too_many_files(inputs)
	return en_error_too_many_files(inputs)
});