/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_CurrentInputs */

const en_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`current`)
};

const cs_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuální`)
};

const sk_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuálne`)
};

const es_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`actual`)
};

const de_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuell`)
};

const fr_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`actuelle`)
};

const pl_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bieżąca`)
};

const hu_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuális`)
};

const it_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`attuale`)
};

const nl_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`huidig`)
};

const pt_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`atual`)
};

const da_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuel`)
};

const sl_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`trenutna`)
};

const hr_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`trenutačan`)
};

const ro_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`curentă`)
};

const sv_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuell`)
};

const fi_status_current = /** @type {(inputs: Status_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nykyinen`)
};

/**
* | output |
* | --- |
* | "current" |
*
* @param {Status_CurrentInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const status_current = /** @type {((inputs?: Status_CurrentInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_CurrentInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_current(inputs)
	if (locale === "sk") return sk_status_current(inputs)
	if (locale === "es") return es_status_current(inputs)
	if (locale === "de") return de_status_current(inputs)
	if (locale === "fr") return fr_status_current(inputs)
	if (locale === "pl") return pl_status_current(inputs)
	if (locale === "hu") return hu_status_current(inputs)
	if (locale === "it") return it_status_current(inputs)
	if (locale === "nl") return nl_status_current(inputs)
	if (locale === "pt") return pt_status_current(inputs)
	if (locale === "da") return da_status_current(inputs)
	if (locale === "sl") return sl_status_current(inputs)
	if (locale === "hr") return hr_status_current(inputs)
	if (locale === "ro") return ro_status_current(inputs)
	if (locale === "sv") return sv_status_current(inputs)
	if (locale === "fi") return fi_status_current(inputs)
	return en_status_current(inputs)
});