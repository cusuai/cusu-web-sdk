/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Role_OperatorInputs */

const en_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator`)
};

const cs_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operátor`)
};

const sk_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operátor`)
};

const es_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operador`)
};

const de_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitarbeiter`)
};

const fr_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opérateur`)
};

const pl_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator`)
};

const hu_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ügyintéző`)
};

const it_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operatore`)
};

const nl_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medewerker`)
};

const pt_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operador`)
};

const da_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medarbejder`)
};

const sl_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operater`)
};

const hr_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operater`)
};

const ro_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator`)
};

const sv_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medarbetare`)
};

const fi_role_operator = /** @type {(inputs: Role_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asiakaspalvelija`)
};

/**
* | output |
* | --- |
* | "Operator" |
*
* @param {Role_OperatorInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const role_operator = /** @type {((inputs?: Role_OperatorInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_OperatorInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_role_operator(inputs)
	if (locale === "sk") return sk_role_operator(inputs)
	if (locale === "es") return es_role_operator(inputs)
	if (locale === "de") return de_role_operator(inputs)
	if (locale === "fr") return fr_role_operator(inputs)
	if (locale === "pl") return pl_role_operator(inputs)
	if (locale === "hu") return hu_role_operator(inputs)
	if (locale === "it") return it_role_operator(inputs)
	if (locale === "nl") return nl_role_operator(inputs)
	if (locale === "pt") return pt_role_operator(inputs)
	if (locale === "da") return da_role_operator(inputs)
	if (locale === "sl") return sl_role_operator(inputs)
	if (locale === "hr") return hr_role_operator(inputs)
	if (locale === "ro") return ro_role_operator(inputs)
	if (locale === "sv") return sv_role_operator(inputs)
	if (locale === "fi") return fi_role_operator(inputs)
	return en_role_operator(inputs)
});