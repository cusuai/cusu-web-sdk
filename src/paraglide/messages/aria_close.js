/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_CloseInputs */

const en_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const bg_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Затваряне`)
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

const et_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sulge`)
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

const lt_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uždaryti`)
};

const lv_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aizvērt`)
};

const nl_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const no_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lukk`)
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

const sr_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatvorite`)
};

const mk_aria_close = /** @type {(inputs: Aria_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Затворете`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_close = /** @type {((inputs?: Aria_CloseInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_CloseInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_aria_close(inputs)
	if (locale === "cs") return cs_aria_close(inputs)
	if (locale === "sk") return sk_aria_close(inputs)
	if (locale === "es") return es_aria_close(inputs)
	if (locale === "de") return de_aria_close(inputs)
	if (locale === "et") return et_aria_close(inputs)
	if (locale === "fr") return fr_aria_close(inputs)
	if (locale === "pl") return pl_aria_close(inputs)
	if (locale === "hu") return hu_aria_close(inputs)
	if (locale === "it") return it_aria_close(inputs)
	if (locale === "lt") return lt_aria_close(inputs)
	if (locale === "lv") return lv_aria_close(inputs)
	if (locale === "nl") return nl_aria_close(inputs)
	if (locale === "no") return no_aria_close(inputs)
	if (locale === "pt") return pt_aria_close(inputs)
	if (locale === "da") return da_aria_close(inputs)
	if (locale === "sl") return sl_aria_close(inputs)
	if (locale === "hr") return hr_aria_close(inputs)
	if (locale === "sr") return sr_aria_close(inputs)
	if (locale === "mk") return mk_aria_close(inputs)
	if (locale === "ro") return ro_aria_close(inputs)
	if (locale === "sv") return sv_aria_close(inputs)
	if (locale === "fi") return fi_aria_close(inputs)
	return en_aria_close(inputs)
});