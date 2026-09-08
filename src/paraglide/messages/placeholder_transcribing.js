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

const es_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribiendo…`)
};

const de_placeholder_transcribing = /** @type {(inputs: Placeholder_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird transkribiert…`)
};

/**
* | output |
* | --- |
* | "Transcribing…" |
*
* @param {Placeholder_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const placeholder_transcribing = /** @type {((inputs?: Placeholder_TranscribingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Placeholder_TranscribingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_placeholder_transcribing(inputs)
	if (locale === "sk") return sk_placeholder_transcribing(inputs)
	if (locale === "es") return es_placeholder_transcribing(inputs)
	if (locale === "de") return de_placeholder_transcribing(inputs)
	return en_placeholder_transcribing(inputs)
});