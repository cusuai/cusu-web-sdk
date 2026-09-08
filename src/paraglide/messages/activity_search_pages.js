/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_Search_PagesInputs */

const en_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Searching the website…`)
};

const cs_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prohlížím web…`)
};

const sk_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prehľadávam web…`)
};

const es_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando en el sitio…`)
};

const de_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durchsuche die Website…`)
};

const fr_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche sur le site…`)
};

const pl_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeszukuję stronę…`)
};

const hu_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keresés a webhelyen…`)
};

const it_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sto cercando sul sito…`)
};

const nl_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De website doorzoeken…`)
};

const pt_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A procurar no site…`)
};

const da_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Søger på webstedet…`)
};

const sl_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iščem po spletišču…`)
};

const hr_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pretražujem web-stranicu…`)
};

const ro_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caut pe site…`)
};

const sv_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Söker på webbplatsen…`)
};

const fi_activity_search_pages = /** @type {(inputs: Activity_Search_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haen verkkosivustolta…`)
};

/**
* | output |
* | --- |
* | "Searching the website…" |
*
* @param {Activity_Search_PagesInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const activity_search_pages = /** @type {((inputs?: Activity_Search_PagesInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_Search_PagesInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_activity_search_pages(inputs)
	if (locale === "sk") return sk_activity_search_pages(inputs)
	if (locale === "es") return es_activity_search_pages(inputs)
	if (locale === "de") return de_activity_search_pages(inputs)
	if (locale === "fr") return fr_activity_search_pages(inputs)
	if (locale === "pl") return pl_activity_search_pages(inputs)
	if (locale === "hu") return hu_activity_search_pages(inputs)
	if (locale === "it") return it_activity_search_pages(inputs)
	if (locale === "nl") return nl_activity_search_pages(inputs)
	if (locale === "pt") return pt_activity_search_pages(inputs)
	if (locale === "da") return da_activity_search_pages(inputs)
	if (locale === "sl") return sl_activity_search_pages(inputs)
	if (locale === "hr") return hr_activity_search_pages(inputs)
	if (locale === "ro") return ro_activity_search_pages(inputs)
	if (locale === "sv") return sv_activity_search_pages(inputs)
	if (locale === "fi") return fi_activity_search_pages(inputs)
	return en_activity_search_pages(inputs)
});