/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Conversation_Waiting_UntilInputs */

const en_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No operator is available until ${i?.when}.`)
};

const bg_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Няма наличен оператор до ${i?.when}.`)
};

const cs_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Operátor bude na lince ${i?.when}.`)
};

const sk_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Operátor bude na linke ${i?.when}.`)
};

const es_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No hay ningún operador disponible hasta ${i?.when}.`)
};

const de_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kein Mitarbeiter ist bis ${i?.when} erreichbar.`)
};

const et_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Operaatorit pole saadaval kuni ${i?.when}.`)
};

const fr_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun opérateur n’est disponible avant ${i?.when}.`)
};

const pl_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Żaden operator nie jest dostępny do ${i?.when}.`)
};

const hu_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when} előtt nincs elérhető ügyintéző.`)
};

const it_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessun operatore è disponibile fino a ${i?.when}.`)
};

const lt_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nėra operatoriaus iki ${i?.when}.`)
};

const lv_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neviens operators nav pieejams līdz ${i?.when}.`)
};

const nl_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Er is geen medewerker beschikbaar tot ${i?.when}.`)
};

const no_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingen operatør er tilgjengelig før ${i?.when}.`)
};

const pt_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum operador está disponível até ${i?.when}.`)
};

const da_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingen medarbejder er tilgængelig før ${i?.when}.`)
};

const sl_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Noben operater ni na voljo do ${i?.when}.`)
};

const hr_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nijedan operater nije dostupan do ${i?.when}.`)
};

const sr_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nijedan operater nije dostupan do ${i?.when}.`)
};

const mk_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Нема достапен оператор до ${i?.when}.`)
};

const ro_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niciun operator nu este disponibil până ${i?.when}.`)
};

const sv_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingen medarbetare är tillgänglig förrän ${i?.when}.`)
};

const fi_conversation_waiting_until = /** @type {(inputs: Conversation_Waiting_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Asiakaspalvelijaa ei ole paikalla ennen ${i?.when}.`)
};

/**
* | output |
* | --- |
* | "No operator is available until {when}." |
*
* @param {Conversation_Waiting_UntilInputs} inputs
* @param {{ locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const conversation_waiting_until = /** @type {((inputs: Conversation_Waiting_UntilInputs, options?: { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_Waiting_UntilInputs, { locale?: "en" | "bg" | "cs" | "sk" | "es" | "de" | "et" | "fr" | "pl" | "hu" | "it" | "lt" | "lv" | "nl" | "no" | "pt" | "da" | "sl" | "hr" | "sr" | "mk" | "ro" | "sv" | "fi" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "bg") return bg_conversation_waiting_until(inputs)
	if (locale === "cs") return cs_conversation_waiting_until(inputs)
	if (locale === "sk") return sk_conversation_waiting_until(inputs)
	if (locale === "es") return es_conversation_waiting_until(inputs)
	if (locale === "de") return de_conversation_waiting_until(inputs)
	if (locale === "et") return et_conversation_waiting_until(inputs)
	if (locale === "fr") return fr_conversation_waiting_until(inputs)
	if (locale === "pl") return pl_conversation_waiting_until(inputs)
	if (locale === "hu") return hu_conversation_waiting_until(inputs)
	if (locale === "it") return it_conversation_waiting_until(inputs)
	if (locale === "lt") return lt_conversation_waiting_until(inputs)
	if (locale === "lv") return lv_conversation_waiting_until(inputs)
	if (locale === "nl") return nl_conversation_waiting_until(inputs)
	if (locale === "no") return no_conversation_waiting_until(inputs)
	if (locale === "pt") return pt_conversation_waiting_until(inputs)
	if (locale === "da") return da_conversation_waiting_until(inputs)
	if (locale === "sl") return sl_conversation_waiting_until(inputs)
	if (locale === "hr") return hr_conversation_waiting_until(inputs)
	if (locale === "sr") return sr_conversation_waiting_until(inputs)
	if (locale === "mk") return mk_conversation_waiting_until(inputs)
	if (locale === "ro") return ro_conversation_waiting_until(inputs)
	if (locale === "sv") return sv_conversation_waiting_until(inputs)
	if (locale === "fi") return fi_conversation_waiting_until(inputs)
	return en_conversation_waiting_until(inputs)
});