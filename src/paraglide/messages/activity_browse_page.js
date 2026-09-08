/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_Browse_PageInputs */

const en_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opening a page…`)
};

const cs_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otevírám stránku…`)
};

const sk_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otváram stránku…`)
};

const es_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abriendo una página…`)
};

const de_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne eine Seite…`)
};

const fr_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouverture d'une page…`)
};

const pl_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwieram stronę…`)
};

const hu_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldal megnyitása…`)
};

const it_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apro una pagina…`)
};

const nl_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een pagina openen…`)
};

const pt_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A abrir uma página…`)
};

const da_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åbner en side…`)
};

const sl_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpiram stran…`)
};

const hr_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otvaram stranicu…`)
};

const ro_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deschid o pagină…`)
};

const sv_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppnar en sida…`)
};

const fi_activity_browse_page = /** @type {(inputs: Activity_Browse_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaan sivua…`)
};

/**
* | output |
* | --- |
* | "Opening a page…" |
*
* @param {Activity_Browse_PageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const activity_browse_page = /** @type {((inputs?: Activity_Browse_PageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_Browse_PageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_activity_browse_page(inputs)
	if (locale === "sk") return sk_activity_browse_page(inputs)
	if (locale === "es") return es_activity_browse_page(inputs)
	if (locale === "de") return de_activity_browse_page(inputs)
	if (locale === "fr") return fr_activity_browse_page(inputs)
	if (locale === "pl") return pl_activity_browse_page(inputs)
	if (locale === "hu") return hu_activity_browse_page(inputs)
	if (locale === "it") return it_activity_browse_page(inputs)
	if (locale === "nl") return nl_activity_browse_page(inputs)
	if (locale === "pt") return pt_activity_browse_page(inputs)
	if (locale === "da") return da_activity_browse_page(inputs)
	if (locale === "sl") return sl_activity_browse_page(inputs)
	if (locale === "hr") return hr_activity_browse_page(inputs)
	if (locale === "ro") return ro_activity_browse_page(inputs)
	if (locale === "sv") return sv_activity_browse_page(inputs)
	if (locale === "fi") return fi_activity_browse_page(inputs)
	return en_activity_browse_page(inputs)
});