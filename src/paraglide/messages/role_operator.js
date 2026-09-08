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

/**
* | output |
* | --- |
* | "Operator" |
*
* @param {Role_OperatorInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const role_operator = /** @type {((inputs?: Role_OperatorInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_OperatorInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_role_operator(inputs)
	if (locale === "sk") return sk_role_operator(inputs)
	if (locale === "es") return es_role_operator(inputs)
	if (locale === "de") return de_role_operator(inputs)
	return en_role_operator(inputs)
});