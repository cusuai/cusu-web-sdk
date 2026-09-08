/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_TranscribedInputs */

const en_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribed`)
};

const cs_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přepsáno`)
};

const sk_status_transcribed = /** @type {(inputs: Status_TranscribedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepísané`)
};

/**
* | output |
* | --- |
* | "Transcribed" |
*
* @param {Status_TranscribedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const status_transcribed = /** @type {((inputs?: Status_TranscribedInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_TranscribedInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_status_transcribed(inputs)
	if (locale === "sk") return sk_status_transcribed(inputs)
	return en_status_transcribed(inputs)
});