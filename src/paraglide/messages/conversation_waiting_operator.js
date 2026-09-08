/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Conversation_Waiting_OperatorInputs */

const en_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No operator is connected right now. You'll get a reply as soon as someone connects.`)
};

const cs_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Momentálně není připojený žádný operátor. Odpověď dostanete, jakmile se někdo připojí.`)
};

const sk_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Momentálne nie je pripojený žiadny operátor. Odpoveď dostanete, hneď ako sa niekto pripojí.`)
};

const es_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora mismo no hay ningún operador conectado. Recibirás una respuesta en cuanto alguien se conecte.`)
};

const de_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerade ist kein Mitarbeiter verbunden. Sie erhalten eine Antwort, sobald sich jemand verbindet.`)
};

const fr_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun opérateur n’est connecté pour le moment. Vous recevrez une réponse dès que quelqu’un se connectera.`)
};

const pl_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tej chwili nie jest połączony żaden operator. Odpowiedź otrzymasz, gdy ktoś się połączy.`)
};

const hu_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jelenleg nincs csatlakozva ügyintéző. Választ akkor kap, amint valaki csatlakozik.`)
};

const it_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non c’è nessun operatore connesso. Riceverai una risposta non appena qualcuno si connetterà.`)
};

const nl_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is nu geen medewerker verbonden. Je krijgt antwoord zodra iemand verbinding maakt.`)
};

const pt_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum operador está ligado neste momento. Receberás uma resposta assim que alguém se ligar.`)
};

const da_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der er ingen medarbejder tilsluttet lige nu. Du får svar, så snart nogen tilslutter sig.`)
};

const sl_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trenutno ni povezan noben operater. Odgovor boste prejeli, ko se nekdo poveže.`)
};

const hr_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trenutačno nije povezan nijedan operater. Odgovor ćete dobiti čim se netko poveže.`)
};

const ro_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Momentan nu este conectat niciun operator. Veți primi un răspuns imediat ce se conectează cineva.`)
};

const sv_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen medarbetare är ansluten just nu. Du får svar så snart någon ansluter.`)
};

const fi_conversation_waiting_operator = /** @type {(inputs: Conversation_Waiting_OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asiakaspalvelijaa ei ole juuri nyt paikalla. Saat vastauksen heti, kun joku liittyy keskusteluun.`)
};

/**
* | output |
* | --- |
* | "No operator is connected right now. You'll get a reply as soon as someone connects." |
*
* @param {Conversation_Waiting_OperatorInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const conversation_waiting_operator = /** @type {((inputs?: Conversation_Waiting_OperatorInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Conversation_Waiting_OperatorInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_conversation_waiting_operator(inputs)
	if (locale === "sk") return sk_conversation_waiting_operator(inputs)
	if (locale === "es") return es_conversation_waiting_operator(inputs)
	if (locale === "de") return de_conversation_waiting_operator(inputs)
	if (locale === "fr") return fr_conversation_waiting_operator(inputs)
	if (locale === "pl") return pl_conversation_waiting_operator(inputs)
	if (locale === "hu") return hu_conversation_waiting_operator(inputs)
	if (locale === "it") return it_conversation_waiting_operator(inputs)
	if (locale === "nl") return nl_conversation_waiting_operator(inputs)
	if (locale === "pt") return pt_conversation_waiting_operator(inputs)
	if (locale === "da") return da_conversation_waiting_operator(inputs)
	if (locale === "sl") return sl_conversation_waiting_operator(inputs)
	if (locale === "hr") return hr_conversation_waiting_operator(inputs)
	if (locale === "ro") return ro_conversation_waiting_operator(inputs)
	if (locale === "sv") return sv_conversation_waiting_operator(inputs)
	if (locale === "fi") return fi_conversation_waiting_operator(inputs)
	return en_conversation_waiting_operator(inputs)
});