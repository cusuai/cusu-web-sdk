/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_History_TitleInputs */

const en_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing here yet`)
};

const bg_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тук все още няма нищо`)
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

const et_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siin pole veel midagi`)
};

const fr_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien pour le moment`)
};

const pl_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie nic tu nie ma`)
};

const hu_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Még nincs itt semmi`)
};

const it_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente`)
};

const lt_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Čia dar nieko nėra`)
};

const lv_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Šeit vēl nekā nav`)
};

const nl_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niets te zien`)
};

const no_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingenting her ennå`)
};

const pt_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há nada`)
};

const da_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her er ikke noget endnu`)
};

const sl_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za zdaj še ni ničesar`)
};

const hr_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ovdje još nema ničega`)
};

const ro_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Încă nu este nimic aici`)
};

const sv_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget här ännu`)
};

const fi_empty_history_title = /** @type {(inputs: Empty_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Täällä ei ole vielä mitään`)
};

/**
* | output |
* | --- |
* | "Nothing here yet" |
*
* @param {Empty_History_TitleInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const empty_history_title = /** @type {((inputs?: Empty_History_TitleInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_History_TitleInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_empty_history_title(inputs)
	if (locale === "cs") return cs_empty_history_title(inputs)
	if (locale === "sk") return sk_empty_history_title(inputs)
	if (locale === "es") return es_empty_history_title(inputs)
	if (locale === "de") return de_empty_history_title(inputs)
	if (locale === "et") return et_empty_history_title(inputs)
	if (locale === "fr") return fr_empty_history_title(inputs)
	if (locale === "pl") return pl_empty_history_title(inputs)
	if (locale === "hu") return hu_empty_history_title(inputs)
	if (locale === "it") return it_empty_history_title(inputs)
	if (locale === "lt") return lt_empty_history_title(inputs)
	if (locale === "lv") return lv_empty_history_title(inputs)
	if (locale === "nl") return nl_empty_history_title(inputs)
	if (locale === "no") return no_empty_history_title(inputs)
	if (locale === "pt") return pt_empty_history_title(inputs)
	if (locale === "da") return da_empty_history_title(inputs)
	if (locale === "sl") return sl_empty_history_title(inputs)
	if (locale === "hr") return hr_empty_history_title(inputs)
	if (locale === "ro") return ro_empty_history_title(inputs)
	if (locale === "sv") return sv_empty_history_title(inputs)
	if (locale === "fi") return fi_empty_history_title(inputs)
	return en_empty_history_title(inputs)
});