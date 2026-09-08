/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_ConnectedInputs */

const en_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An operator connected.`)
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

const nl_operator_connected = /** @type {(inputs: Operator_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een medewerker heeft verbinding gemaakt.`)
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
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const operator_connected = /** @type {((inputs?: Operator_ConnectedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_ConnectedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_operator_connected(inputs)
	if (locale === "sk") return sk_operator_connected(inputs)
	if (locale === "es") return es_operator_connected(inputs)
	if (locale === "de") return de_operator_connected(inputs)
	if (locale === "fr") return fr_operator_connected(inputs)
	if (locale === "pl") return pl_operator_connected(inputs)
	if (locale === "hu") return hu_operator_connected(inputs)
	if (locale === "it") return it_operator_connected(inputs)
	if (locale === "nl") return nl_operator_connected(inputs)
	if (locale === "pt") return pt_operator_connected(inputs)
	if (locale === "da") return da_operator_connected(inputs)
	if (locale === "sl") return sl_operator_connected(inputs)
	if (locale === "hr") return hr_operator_connected(inputs)
	if (locale === "ro") return ro_operator_connected(inputs)
	if (locale === "sv") return sv_operator_connected(inputs)
	if (locale === "fi") return fi_operator_connected(inputs)
	return en_operator_connected(inputs)
});