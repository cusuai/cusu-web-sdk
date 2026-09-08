/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Call_TranscribingInputs */

const en_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribing what you said…`)
};

const cs_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Přepisuji, co jste řekli…`)
};

const sk_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepisujem, čo ste povedali…`)
};

const es_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribiendo lo que has dicho…`)
};

const de_call_transcribing = /** @type {(inputs: Call_TranscribingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ihre Worte werden transkribiert…`)
};

/**
* | output |
* | --- |
* | "Transcribing what you said…" |
*
* @param {Call_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const call_transcribing = /** @type {((inputs?: Call_TranscribingInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Call_TranscribingInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_call_transcribing(inputs)
	if (locale === "sk") return sk_call_transcribing(inputs)
	if (locale === "es") return es_call_transcribing(inputs)
	if (locale === "de") return de_call_transcribing(inputs)
	return en_call_transcribing(inputs)
});