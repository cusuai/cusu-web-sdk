/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_ClosedInputs */

const en_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Closed`)
};

const cs_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uzavřeno`)
};

const sk_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uzatvorené`)
};

const es_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrada`)
};

const de_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geschlossen`)
};

const fr_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermée`)
};

const pl_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknięta`)
};

const hu_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lezárva`)
};

const it_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiusa`)
};

const nl_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesloten`)
};

const pt_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerrada`)
};

const da_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lukket`)
};

const sl_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaprta`)
};

const hr_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatvoren`)
};

const ro_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Închisă`)
};

const sv_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stängd`)
};

const fi_status_closed = /** @type {(inputs: Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suljettu`)
};

/**
* | output |
* | --- |
* | "Closed" |
*
* @param {Status_ClosedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const status_closed = /** @type {((inputs?: Status_ClosedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_ClosedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_closed(inputs)
	if (locale === "sk") return sk_status_closed(inputs)
	if (locale === "es") return es_status_closed(inputs)
	if (locale === "de") return de_status_closed(inputs)
	if (locale === "fr") return fr_status_closed(inputs)
	if (locale === "pl") return pl_status_closed(inputs)
	if (locale === "hu") return hu_status_closed(inputs)
	if (locale === "it") return it_status_closed(inputs)
	if (locale === "nl") return nl_status_closed(inputs)
	if (locale === "pt") return pt_status_closed(inputs)
	if (locale === "da") return da_status_closed(inputs)
	if (locale === "sl") return sl_status_closed(inputs)
	if (locale === "hr") return hr_status_closed(inputs)
	if (locale === "ro") return ro_status_closed(inputs)
	if (locale === "sv") return sv_status_closed(inputs)
	if (locale === "fi") return fi_status_closed(inputs)
	return en_status_closed(inputs)
});