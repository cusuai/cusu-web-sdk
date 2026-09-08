/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_CloseInputs */

const en_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const cs_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zavřít`)
};

const sk_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zavrieť`)
};

const es_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar`)
};

const de_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließen`)
};

const fr_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer`)
};

const pl_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij`)
};

const hu_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezárás`)
};

const it_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi`)
};

const nl_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const pt_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar`)
};

const da_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luk`)
};

const sl_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapri`)
};

const hr_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatvori`)
};

const ro_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Închide`)
};

const sv_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng`)
};

const fi_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sulje`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Aria_CloseInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_close = /** @type {((inputs?: Aria_CloseInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_CloseInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_close(inputs)
	if (locale === "sk") return sk_aria_close(inputs)
	if (locale === "es") return es_aria_close(inputs)
	if (locale === "de") return de_aria_close(inputs)
	if (locale === "fr") return fr_aria_close(inputs)
	if (locale === "pl") return pl_aria_close(inputs)
	if (locale === "hu") return hu_aria_close(inputs)
	if (locale === "it") return it_aria_close(inputs)
	if (locale === "nl") return nl_aria_close(inputs)
	if (locale === "pt") return pt_aria_close(inputs)
	if (locale === "da") return da_aria_close(inputs)
	if (locale === "sl") return sl_aria_close(inputs)
	if (locale === "hr") return hr_aria_close(inputs)
	if (locale === "ro") return ro_aria_close(inputs)
	if (locale === "sv") return sv_aria_close(inputs)
	if (locale === "fi") return fi_aria_close(inputs)
	return en_aria_close(inputs)
});