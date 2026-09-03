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

/**
* | output |
* | --- |
* | "Closed" |
*
* @param {Status_ClosedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const status_closed = /** @type {((inputs?: Status_ClosedInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_ClosedInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_closed(inputs)
	return en_status_closed(inputs)
});