/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_WorkingInputs */

const en_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Looking that up…`)
};

const bg_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверявам…`)
};

const cs_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hledám to…`)
};

const sk_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hľadám to…`)
};

const es_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando eso…`)
};

const de_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche danach…`)
};

const et_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otsin teavet…`)
};

const fr_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche en cours…`)
};

const pl_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukam tego…`)
};

const hu_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keresem…`)
};

const it_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sto cercando…`)
};

const lt_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ieškoma informacijos…`)
};

const lv_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meklē informāciju…`)
};

const nl_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Even opzoeken…`)
};

const no_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undersøker saken…`)
};

const pt_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A procurar isso…`)
};

const da_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slår det op…`)
};

const sl_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To iščem…`)
};

const hr_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provjeravam…`)
};

const sr_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proveravam…`)
};

const mk_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверувам…`)
};

const ro_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verific…`)
};

const sv_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerar…`)
};

const fi_activity_working = /** @type {(inputs: Activity_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selvitän asiaa…`)
};

/**
* | output |
* | --- |
* | "Looking that up…" |
*
* @param {Activity_WorkingInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const activity_working = /** @type {((inputs?: Activity_WorkingInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_WorkingInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_activity_working(inputs)
	if (locale === "cs") return cs_activity_working(inputs)
	if (locale === "sk") return sk_activity_working(inputs)
	if (locale === "es") return es_activity_working(inputs)
	if (locale === "de") return de_activity_working(inputs)
	if (locale === "et") return et_activity_working(inputs)
	if (locale === "fr") return fr_activity_working(inputs)
	if (locale === "pl") return pl_activity_working(inputs)
	if (locale === "hu") return hu_activity_working(inputs)
	if (locale === "it") return it_activity_working(inputs)
	if (locale === "lt") return lt_activity_working(inputs)
	if (locale === "lv") return lv_activity_working(inputs)
	if (locale === "nl") return nl_activity_working(inputs)
	if (locale === "no") return no_activity_working(inputs)
	if (locale === "pt") return pt_activity_working(inputs)
	if (locale === "da") return da_activity_working(inputs)
	if (locale === "sl") return sl_activity_working(inputs)
	if (locale === "hr") return hr_activity_working(inputs)
	if (locale === "sr") return sr_activity_working(inputs)
	if (locale === "mk") return mk_activity_working(inputs)
	if (locale === "ro") return ro_activity_working(inputs)
	if (locale === "sv") return sv_activity_working(inputs)
	if (locale === "fi") return fi_activity_working(inputs)
	return en_activity_working(inputs)
});