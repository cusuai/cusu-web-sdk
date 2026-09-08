/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Placeholder_TranscribingInputs */

const en_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribing…`)
};

const cs_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přepisuji…`)
};

const sk_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisujem…`)
};

/**
* | output |
* | --- |
* | "Transcribing…" |
*
* @param {Placeholder_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const placeholder_transcribing = /** @type {((inputs?: Placeholder_TranscribingInputs, options?: { locale?: "en" | "cs" | "sk" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Placeholder_TranscribingInputs, { locale?: "en" | "cs" | "sk" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_placeholder_transcribing(inputs)
	if (locale === "sk") return sk_placeholder_transcribing(inputs)
	return en_placeholder_transcribing(inputs)
});