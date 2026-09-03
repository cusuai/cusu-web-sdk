/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_History_BodyInputs */

const en_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No conversations yet — go ahead and ask. We've got you.`)
};

const cs_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Žádná konverzace ještě neproběhla — pojď se zeptat. Jsme v tom s tebou.`)
};

/**
* | output |
* | --- |
* | "No conversations yet — go ahead and ask. We've got you." |
*
* @param {Empty_History_BodyInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const empty_history_body = /** @type {((inputs?: Empty_History_BodyInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_History_BodyInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_history_body(inputs)
	return en_empty_history_body(inputs)
});