/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Role_YouInputs */

const en_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You`)
};

const cs_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vy`)
};

const sk_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vy`)
};

/**
* | output |
* | --- |
* | "You" |
*
* @param {Role_YouInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const role_you = /** @type {((inputs?: Role_YouInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_YouInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_role_you(inputs)
	if (locale === "sk") return sk_role_you(inputs)
	return en_role_you(inputs)
});