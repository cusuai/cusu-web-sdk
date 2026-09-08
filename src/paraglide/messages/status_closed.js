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

/**
* | output |
* | --- |
* | "Closed" |
*
* @param {Status_ClosedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const status_closed = /** @type {((inputs?: Status_ClosedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_ClosedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_closed(inputs)
	if (locale === "sk") return sk_status_closed(inputs)
	if (locale === "es") return es_status_closed(inputs)
	if (locale === "de") return de_status_closed(inputs)
	return en_status_closed(inputs)
});