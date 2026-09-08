/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Mic_DeniedInputs */

const en_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allow microphone access.`)
};

const cs_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povolte přístup k mikrofonu.`)
};

const sk_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povoľte prístup k mikrofónu.`)
};

const es_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permite el acceso al micrófono.`)
};

const de_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erlauben Sie den Zugriff auf das Mikrofon.`)
};

const fr_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autorisez l’accès au microphone.`)
};

const pl_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zezwól na dostęp do mikrofonu.`)
};

const hu_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Engedélyezze a mikrofon használatát.`)
};

const it_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consenti l’accesso al microfono.`)
};

const nl_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef toegang tot de microfoon.`)
};

const pt_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permite o acesso ao microfone.`)
};

const da_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillad adgang til mikrofonen.`)
};

const sl_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dovolite dostop do mikrofona.`)
};

const hr_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dopustite pristup mikrofonu.`)
};

const ro_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permiteți accesul la microfon.`)
};

const sv_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillåt åtkomst till mikrofonen.`)
};

const fi_error_mic_denied = /** @type {(inputs: Error_Mic_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salli mikrofonin käyttö.`)
};

/**
* | output |
* | --- |
* | "Allow microphone access." |
*
* @param {Error_Mic_DeniedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_mic_denied = /** @type {((inputs?: Error_Mic_DeniedInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Mic_DeniedInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_mic_denied(inputs)
	if (locale === "sk") return sk_error_mic_denied(inputs)
	if (locale === "es") return es_error_mic_denied(inputs)
	if (locale === "de") return de_error_mic_denied(inputs)
	if (locale === "fr") return fr_error_mic_denied(inputs)
	if (locale === "pl") return pl_error_mic_denied(inputs)
	if (locale === "hu") return hu_error_mic_denied(inputs)
	if (locale === "it") return it_error_mic_denied(inputs)
	if (locale === "nl") return nl_error_mic_denied(inputs)
	if (locale === "pt") return pt_error_mic_denied(inputs)
	if (locale === "da") return da_error_mic_denied(inputs)
	if (locale === "sl") return sl_error_mic_denied(inputs)
	if (locale === "hr") return hr_error_mic_denied(inputs)
	if (locale === "ro") return ro_error_mic_denied(inputs)
	if (locale === "sv") return sv_error_mic_denied(inputs)
	if (locale === "fi") return fi_error_mic_denied(inputs)
	return en_error_mic_denied(inputs)
});