/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Role_YouInputs */

const en_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You`)
};

const bg_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вие`)
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

const et_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teie`)
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

const lt_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jūs`)
};

const lv_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jūs`)
};

const nl_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jij`)
};

const no_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du`)
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

const sr_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi`)
};

const mk_role_you = /** @type {(inputs: Role_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вие`)
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
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const role_you = /** @type {((inputs?: Role_YouInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_YouInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_role_you(inputs)
	if (locale === "cs") return cs_role_you(inputs)
	if (locale === "sk") return sk_role_you(inputs)
	if (locale === "es") return es_role_you(inputs)
	if (locale === "de") return de_role_you(inputs)
	if (locale === "et") return et_role_you(inputs)
	if (locale === "fr") return fr_role_you(inputs)
	if (locale === "pl") return pl_role_you(inputs)
	if (locale === "hu") return hu_role_you(inputs)
	if (locale === "it") return it_role_you(inputs)
	if (locale === "lt") return lt_role_you(inputs)
	if (locale === "lv") return lv_role_you(inputs)
	if (locale === "nl") return nl_role_you(inputs)
	if (locale === "no") return no_role_you(inputs)
	if (locale === "pt") return pt_role_you(inputs)
	if (locale === "da") return da_role_you(inputs)
	if (locale === "sl") return sl_role_you(inputs)
	if (locale === "hr") return hr_role_you(inputs)
	if (locale === "sr") return sr_role_you(inputs)
	if (locale === "mk") return mk_role_you(inputs)
	if (locale === "ro") return ro_role_you(inputs)
	if (locale === "sv") return sv_role_you(inputs)
	if (locale === "fi") return fi_role_you(inputs)
	return en_role_you(inputs)
});