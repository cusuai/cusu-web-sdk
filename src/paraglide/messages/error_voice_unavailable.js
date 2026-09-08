/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Voice_UnavailableInputs */

const en_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voice calling is not available.`)
};

const cs_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hlasové volání není dostupné.`)
};

const sk_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hlasové volanie nie je dostupné.`)
};

const es_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las llamadas de voz no están disponibles.`)
};

const de_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprachanrufe sind nicht verfügbar.`)
};

const fr_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les appels vocaux ne sont pas disponibles.`)
};

const pl_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połączenia głosowe nie są dostępne.`)
};

const hu_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A hanghívás nem érhető el.`)
};

const it_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le chiamate vocali non sono disponibili.`)
};

const nl_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spraakoproepen zijn niet beschikbaar.`)
};

const pt_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As chamadas de voz não estão disponíveis.`)
};

const da_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmeopkald er ikke tilgængelige.`)
};

const sl_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glasovni klici niso na voljo.`)
};

const hr_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glasovni pozivi nisu dostupni.`)
};

const ro_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apelurile vocale nu sunt disponibile.`)
};

const sv_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstsamtal är inte tillgängliga.`)
};

const fi_error_voice_unavailable = /** @type {(inputs: Error_Voice_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äänipuhelut eivät ole käytettävissä.`)
};

/**
* | output |
* | --- |
* | "Voice calling is not available." |
*
* @param {Error_Voice_UnavailableInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_voice_unavailable = /** @type {((inputs?: Error_Voice_UnavailableInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Voice_UnavailableInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_voice_unavailable(inputs)
	if (locale === "sk") return sk_error_voice_unavailable(inputs)
	if (locale === "es") return es_error_voice_unavailable(inputs)
	if (locale === "de") return de_error_voice_unavailable(inputs)
	if (locale === "fr") return fr_error_voice_unavailable(inputs)
	if (locale === "pl") return pl_error_voice_unavailable(inputs)
	if (locale === "hu") return hu_error_voice_unavailable(inputs)
	if (locale === "it") return it_error_voice_unavailable(inputs)
	if (locale === "nl") return nl_error_voice_unavailable(inputs)
	if (locale === "pt") return pt_error_voice_unavailable(inputs)
	if (locale === "da") return da_error_voice_unavailable(inputs)
	if (locale === "sl") return sl_error_voice_unavailable(inputs)
	if (locale === "hr") return hr_error_voice_unavailable(inputs)
	if (locale === "ro") return ro_error_voice_unavailable(inputs)
	if (locale === "sv") return sv_error_voice_unavailable(inputs)
	if (locale === "fi") return fi_error_voice_unavailable(inputs)
	return en_error_voice_unavailable(inputs)
});