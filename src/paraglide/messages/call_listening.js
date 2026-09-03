/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_ListeningInputs */

const en_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listening — you can speak`)
};

const cs_call_listening = /** @type {(inputs: Call_ListeningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poslouchám — můžete mluvit`)
};

/**
* | output |
* | --- |
* | "Listening — you can speak" |
*
* @param {Call_ListeningInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const call_listening = /** @type {((inputs?: Call_ListeningInputs, options?: { locale?: "en" | "cs" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_ListeningInputs, { locale?: "en" | "cs" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_listening(inputs)
	return en_call_listening(inputs)
});