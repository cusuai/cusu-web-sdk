/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_Call_ApiInputs */

const en_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Looking up your data…`)
};

const bg_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Търся вашите данни…`)
};

const cs_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hledám vaše údaje…`)
};

const sk_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hľadám vaše údaje…`)
};

const es_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultando tus datos…`)
};

const de_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche Ihre Daten…`)
};

const et_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otsin teie andmeid…`)
};

const fr_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultation de vos données…`)
};

const pl_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzam Twoje dane…`)
};

const hu_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adatok lekérése…`)
};

const it_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sto cercando i tuoi dati…`)
};

const lt_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ieškoma jūsų duomenų…`)
};

const lv_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meklē jūsu datus…`)
};

const nl_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gegevens opzoeken…`)
};

const no_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slår opp opplysningene dine…`)
};

const pt_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A consultar os seus dados…`)
};

const da_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slår dine data op…`)
};

const sl_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iščem vaše podatke…`)
};

const hr_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dohvaćam vaše podatke…`)
};

const ro_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caut datele dumneavoastră…`)
};

const sv_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hämtar dina uppgifter…`)
};

const fi_activity_call_api = /** @type {(inputs: Activity_Call_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haen tietojasi…`)
};

/**
* | output |
* | --- |
* | "Looking up your data…" |
*
* @param {Activity_Call_ApiInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const activity_call_api = /** @type {((inputs?: Activity_Call_ApiInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_Call_ApiInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_activity_call_api(inputs)
	if (locale === "cs") return cs_activity_call_api(inputs)
	if (locale === "sk") return sk_activity_call_api(inputs)
	if (locale === "es") return es_activity_call_api(inputs)
	if (locale === "de") return de_activity_call_api(inputs)
	if (locale === "et") return et_activity_call_api(inputs)
	if (locale === "fr") return fr_activity_call_api(inputs)
	if (locale === "pl") return pl_activity_call_api(inputs)
	if (locale === "hu") return hu_activity_call_api(inputs)
	if (locale === "it") return it_activity_call_api(inputs)
	if (locale === "lt") return lt_activity_call_api(inputs)
	if (locale === "lv") return lv_activity_call_api(inputs)
	if (locale === "nl") return nl_activity_call_api(inputs)
	if (locale === "no") return no_activity_call_api(inputs)
	if (locale === "pt") return pt_activity_call_api(inputs)
	if (locale === "da") return da_activity_call_api(inputs)
	if (locale === "sl") return sl_activity_call_api(inputs)
	if (locale === "hr") return hr_activity_call_api(inputs)
	if (locale === "ro") return ro_activity_call_api(inputs)
	if (locale === "sv") return sv_activity_call_api(inputs)
	if (locale === "fi") return fi_activity_call_api(inputs)
	return en_activity_call_api(inputs)
});