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

const es_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tú`)
};

const de_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie`)
};

const fr_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous`)
};

const pl_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ty`)
};

const hu_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ön`)
};

const it_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu`)
};

const nl_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jij`)
};

const pt_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu`)
};

const da_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du`)
};

const sl_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi`)
};

const hr_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi`)
};

const ro_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dumneavoastră`)
};

const sv_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du`)
};

const fi_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinä`)
};

/**
* | output |
* | --- |
* | "You" |
*
* @param {Role_YouInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const role_you = /** @type {((inputs?: Role_YouInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_YouInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_role_you(inputs)
	if (locale === "sk") return sk_role_you(inputs)
	if (locale === "es") return es_role_you(inputs)
	if (locale === "de") return de_role_you(inputs)
	if (locale === "fr") return fr_role_you(inputs)
	if (locale === "pl") return pl_role_you(inputs)
	if (locale === "hu") return hu_role_you(inputs)
	if (locale === "it") return it_role_you(inputs)
	if (locale === "nl") return nl_role_you(inputs)
	if (locale === "pt") return pt_role_you(inputs)
	if (locale === "da") return da_role_you(inputs)
	if (locale === "sl") return sl_role_you(inputs)
	if (locale === "hr") return hr_role_you(inputs)
	if (locale === "ro") return ro_role_you(inputs)
	if (locale === "sv") return sv_role_you(inputs)
	if (locale === "fi") return fi_role_you(inputs)
	return en_role_you(inputs)
});