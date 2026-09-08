/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_Attach_LinkInputs */

const en_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attaching a link…`)
};

const cs_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přikládám odkaz…`)
};

const sk_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prikladám odkaz…`)
};

const es_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adjuntando un enlace…`)
};

const de_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hänge einen Link an…`)
};

const fr_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajout d'un lien…`)
};

const pl_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołączam link…`)
};

const hu_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link csatolása…`)
};

const it_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allego un link…`)
};

const nl_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een link bijvoegen…`)
};

const pt_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A anexar uma ligação…`)
};

const da_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedhæfter et link…`)
};

const sl_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pripemam povezavo…`)
};

const hr_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodajem poveznicu…`)
};

const ro_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atașez un link…`)
};

const sv_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bifogar en länk…`)
};

const fi_activity_attach_link = /** @type {(inputs: Activity_Attach_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liitän linkkiä…`)
};

/**
* | output |
* | --- |
* | "Attaching a link…" |
*
* @param {Activity_Attach_LinkInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const activity_attach_link = /** @type {((inputs?: Activity_Attach_LinkInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_Attach_LinkInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_activity_attach_link(inputs)
	if (locale === "sk") return sk_activity_attach_link(inputs)
	if (locale === "es") return es_activity_attach_link(inputs)
	if (locale === "de") return de_activity_attach_link(inputs)
	if (locale === "fr") return fr_activity_attach_link(inputs)
	if (locale === "pl") return pl_activity_attach_link(inputs)
	if (locale === "hu") return hu_activity_attach_link(inputs)
	if (locale === "it") return it_activity_attach_link(inputs)
	if (locale === "nl") return nl_activity_attach_link(inputs)
	if (locale === "pt") return pt_activity_attach_link(inputs)
	if (locale === "da") return da_activity_attach_link(inputs)
	if (locale === "sl") return sl_activity_attach_link(inputs)
	if (locale === "hr") return hr_activity_attach_link(inputs)
	if (locale === "ro") return ro_activity_attach_link(inputs)
	if (locale === "sv") return sv_activity_attach_link(inputs)
	if (locale === "fi") return fi_activity_attach_link(inputs)
	return en_activity_attach_link(inputs)
});