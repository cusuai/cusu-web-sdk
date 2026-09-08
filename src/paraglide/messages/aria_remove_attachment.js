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

const fr_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la pièce jointe`)
};

const pl_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń załącznik`)
};

const hu_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melléklet eltávolítása`)
};

const it_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi allegato`)
};

const nl_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijlage verwijderen`)
};

const pt_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover anexo`)
};

const da_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fjern vedhæftet fil`)
};

const sl_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odstrani prilogo`)
};

const hr_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukloni privitak`)
};

const ro_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimină atașamentul`)
};

const sv_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort bilaga`)
};

const fi_aria_remove_attachment = /** @type {(inputs: Aria_Remove_AttachmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poista liite`)
};

/**
* | output |
* | --- |
* | "Remove attachment" |
*
* @param {Aria_Remove_AttachmentInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_remove_attachment = /** @type {((inputs?: Aria_Remove_AttachmentInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Remove_AttachmentInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_remove_attachment(inputs)
	if (locale === "sk") return sk_aria_remove_attachment(inputs)
	if (locale === "es") return es_aria_remove_attachment(inputs)
	if (locale === "de") return de_aria_remove_attachment(inputs)
	if (locale === "fr") return fr_aria_remove_attachment(inputs)
	if (locale === "pl") return pl_aria_remove_attachment(inputs)
	if (locale === "hu") return hu_aria_remove_attachment(inputs)
	if (locale === "it") return it_aria_remove_attachment(inputs)
	if (locale === "nl") return nl_aria_remove_attachment(inputs)
	if (locale === "pt") return pt_aria_remove_attachment(inputs)
	if (locale === "da") return da_aria_remove_attachment(inputs)
	if (locale === "sl") return sl_aria_remove_attachment(inputs)
	if (locale === "hr") return hr_aria_remove_attachment(inputs)
	if (locale === "ro") return ro_aria_remove_attachment(inputs)
	if (locale === "sv") return sv_aria_remove_attachment(inputs)
	if (locale === "fi") return fi_aria_remove_attachment(inputs)
	return en_aria_remove_attachment(inputs)
});