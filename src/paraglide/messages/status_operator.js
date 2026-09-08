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

/**
* | output |
* | --- |
* | "Operator" |
*
* @param {Status_OperatorInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const status_operator = /** @type {((inputs?: Status_OperatorInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_OperatorInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_operator(inputs)
	if (locale === "sk") return sk_status_operator(inputs)
	return en_status_operator(inputs)
});