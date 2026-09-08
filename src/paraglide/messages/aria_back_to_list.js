/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Back_To_ListInputs */

const en_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to overview`)
};

const cs_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zpět na přehled`)
};

const sk_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Späť na prehľad`)
};

const es_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al resumen`)
};

const de_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur Übersicht`)
};

const fr_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à l’aperçu`)
};

const pl_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do przeglądu`)
};

const hu_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vissza az áttekintéshez`)
};

const it_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alla panoramica`)
};

const nl_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het overzicht`)
};

const pt_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao resumo`)
};

const da_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tilbage til oversigten`)
};

const sl_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazaj na pregled`)
};

const hr_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Natrag na pregled`)
};

const ro_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Înapoi la prezentare`)
};

const sv_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till översikten`)
};

const fi_aria_back_to_list = /** @type {(inputs: Aria_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takaisin yhteenvetoon`)
};

/**
* | output |
* | --- |
* | "Back to overview" |
*
* @param {Aria_Back_To_ListInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_back_to_list = /** @type {((inputs?: Aria_Back_To_ListInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Back_To_ListInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_back_to_list(inputs)
	if (locale === "sk") return sk_aria_back_to_list(inputs)
	if (locale === "es") return es_aria_back_to_list(inputs)
	if (locale === "de") return de_aria_back_to_list(inputs)
	if (locale === "fr") return fr_aria_back_to_list(inputs)
	if (locale === "pl") return pl_aria_back_to_list(inputs)
	if (locale === "hu") return hu_aria_back_to_list(inputs)
	if (locale === "it") return it_aria_back_to_list(inputs)
	if (locale === "nl") return nl_aria_back_to_list(inputs)
	if (locale === "pt") return pt_aria_back_to_list(inputs)
	if (locale === "da") return da_aria_back_to_list(inputs)
	if (locale === "sl") return sl_aria_back_to_list(inputs)
	if (locale === "hr") return hr_aria_back_to_list(inputs)
	if (locale === "ro") return ro_aria_back_to_list(inputs)
	if (locale === "sv") return sv_aria_back_to_list(inputs)
	if (locale === "fi") return fi_aria_back_to_list(inputs)
	return en_aria_back_to_list(inputs)
});