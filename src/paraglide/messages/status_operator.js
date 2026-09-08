/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_OperatorInputs */

const en_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator`)
};

const cs_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operátor`)
};

const sk_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operátor`)
};

const es_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operador`)
};

const de_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitarbeiter`)
};

const fr_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opérateur`)
};

const pl_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator`)
};

const hu_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ügyintéző`)
};

const it_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operatore`)
};

const nl_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medewerker`)
};

const pt_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operador`)
};

const da_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medarbejder`)
};

const sl_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operater`)
};

const hr_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operater`)
};

const ro_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator`)
};

const sv_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medarbetare`)
};

const fi_status_operator = /** @type {(inputs: Status_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asiakaspalvelija`)
};

/**
* | output |
* | --- |
* | "Operator" |
*
* @param {Status_OperatorInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const status_operator = /** @type {((inputs?: Status_OperatorInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_OperatorInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_operator(inputs)
	if (locale === "sk") return sk_status_operator(inputs)
	if (locale === "es") return es_status_operator(inputs)
	if (locale === "de") return de_status_operator(inputs)
	if (locale === "fr") return fr_status_operator(inputs)
	if (locale === "pl") return pl_status_operator(inputs)
	if (locale === "hu") return hu_status_operator(inputs)
	if (locale === "it") return it_status_operator(inputs)
	if (locale === "nl") return nl_status_operator(inputs)
	if (locale === "pt") return pt_status_operator(inputs)
	if (locale === "da") return da_status_operator(inputs)
	if (locale === "sl") return sl_status_operator(inputs)
	if (locale === "hr") return hr_status_operator(inputs)
	if (locale === "ro") return ro_status_operator(inputs)
	if (locale === "sv") return sv_status_operator(inputs)
	if (locale === "fi") return fi_status_operator(inputs)
	return en_status_operator(inputs)
});