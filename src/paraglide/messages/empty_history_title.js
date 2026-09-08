/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_History_TitleInputs */

const en_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing here yet`)
};

const cs_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tady zatím nic není`)
};

const sk_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatiaľ tu nič nie je`)
};

const es_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay nada`)
};

const de_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nichts vorhanden`)
};

/**
* | output |
* | --- |
* | "Nothing here yet" |
*
* @param {Empty_History_TitleInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const empty_history_title = /** @type {((inputs?: Empty_History_TitleInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_History_TitleInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_history_title(inputs)
	if (locale === "sk") return sk_empty_history_title(inputs)
	if (locale === "es") return es_empty_history_title(inputs)
	if (locale === "de") return de_empty_history_title(inputs)
	return en_empty_history_title(inputs)
});