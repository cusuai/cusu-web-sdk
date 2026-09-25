/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_ConnectedInputs */

const en_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An operator connected.`)
};

const bg_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оператор се свърза.`)
};

const cs_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operátor se připojil.`)
};

const sk_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operátor sa pripojil.`)
};

const es_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un operador se ha conectado.`)
};

const de_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mitarbeiter hat sich verbunden.`)
};

const et_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operaator liitus vestlusega.`)
};

const fr_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un opérateur s’est connecté.`)
};

const pl_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator się połączył.`)
};

const hu_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Egy ügyintéző csatlakozott.`)
};

const it_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un operatore si è connesso.`)
};

const lt_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operatorius prisijungė.`)
};

const lv_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operators pievienojās sarunai.`)
};

const nl_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een medewerker heeft verbinding gemaakt.`)
};

const no_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En operatør koblet seg til.`)
};

const pt_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um operador ligou-se.`)
};

const da_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En medarbejder har tilsluttet sig.`)
};

const sl_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operater se je povezal.`)
};

const hr_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operater se povezao.`)
};

const sr_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operater se uključio.`)
};

const mk_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Операторот се вклучи.`)
};

const ro_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un operator s-a conectat.`)
};

const sv_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En medarbetare anslöt.`)
};

const fi_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asiakaspalvelija liittyi keskusteluun.`)
};

/**
* | output |
* | --- |
* | "An operator connected." |
*
* @param {Operator_ConnectedInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const operator_connected = /** @type {((inputs?: Operator_ConnectedInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_ConnectedInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_operator_connected(inputs)
	if (locale === "cs") return cs_operator_connected(inputs)
	if (locale === "sk") return sk_operator_connected(inputs)
	if (locale === "es") return es_operator_connected(inputs)
	if (locale === "de") return de_operator_connected(inputs)
	if (locale === "et") return et_operator_connected(inputs)
	if (locale === "fr") return fr_operator_connected(inputs)
	if (locale === "pl") return pl_operator_connected(inputs)
	if (locale === "hu") return hu_operator_connected(inputs)
	if (locale === "it") return it_operator_connected(inputs)
	if (locale === "lt") return lt_operator_connected(inputs)
	if (locale === "lv") return lv_operator_connected(inputs)
	if (locale === "nl") return nl_operator_connected(inputs)
	if (locale === "no") return no_operator_connected(inputs)
	if (locale === "pt") return pt_operator_connected(inputs)
	if (locale === "da") return da_operator_connected(inputs)
	if (locale === "sl") return sl_operator_connected(inputs)
	if (locale === "hr") return hr_operator_connected(inputs)
	if (locale === "sr") return sr_operator_connected(inputs)
	if (locale === "mk") return mk_operator_connected(inputs)
	if (locale === "ro") return ro_operator_connected(inputs)
	if (locale === "sv") return sv_operator_connected(inputs)
	if (locale === "fi") return fi_operator_connected(inputs)
	return en_operator_connected(inputs)
});