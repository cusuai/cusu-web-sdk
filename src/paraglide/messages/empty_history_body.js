/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_History_BodyInputs */

const en_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No conversations yet — go ahead and ask. We've got you.`)
};

const cs_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Žádná konverzace ještě neproběhla — pojď se zeptat. Jsme v tom s tebou.`)
};

const sk_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatiaľ neprebehla žiadna konverzácia — pokojne sa opýtajte. Sme v tom s vami.`)
};

const es_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay conversaciones — pregunta lo que quieras. Estamos aquí para ayudarte.`)
};

const de_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gibt noch keine Unterhaltungen — stellen Sie einfach eine Frage. Wir helfen Ihnen gerne.`)
};

const fr_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune conversation pour le moment — posez votre question. Nous sommes là pour vous aider.`)
};

const pl_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma jeszcze żadnych rozmów — śmiało zadaj pytanie. Jesteśmy tu, aby Ci pomóc.`)
};

const hu_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Még nincsenek beszélgetések — kérdezzen bátran. Szívesen segítünk.`)
};

const it_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono ancora conversazioni — fai pure una domanda. Siamo qui per aiutarti.`)
};

const nl_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er zijn nog geen gesprekken — stel gerust een vraag. We helpen je graag.`)
};

const pt_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há conversas — pergunta à vontade. Estamos aqui para ajudar.`)
};

const da_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der er ingen samtaler endnu — spørg bare. Vi er her for at hjælpe.`)
};

const sl_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pogovorov še ni — kar vprašajte. Tukaj smo, da vam pomagamo.`)
};

const hr_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Još nema razgovora — slobodno pitajte. Tu smo da vam pomognemo.`)
};

const ro_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu există încă conversații — adresați o întrebare. Suntem aici să vă ajutăm.`)
};

const sv_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inga konversationer ännu — fråga på. Vi finns här för att hjälpa dig.`)
};

const fi_empty_history_body = /** @type {(inputs: Empty_History_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keskusteluja ei ole vielä — kysy rohkeasti. Autamme mielellämme.`)
};

/**
* | output |
* | --- |
* | "No conversations yet — go ahead and ask. We've got you." |
*
* @param {Empty_History_BodyInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const empty_history_body = /** @type {((inputs?: Empty_History_BodyInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_History_BodyInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_history_body(inputs)
	if (locale === "sk") return sk_empty_history_body(inputs)
	if (locale === "es") return es_empty_history_body(inputs)
	if (locale === "de") return de_empty_history_body(inputs)
	if (locale === "fr") return fr_empty_history_body(inputs)
	if (locale === "pl") return pl_empty_history_body(inputs)
	if (locale === "hu") return hu_empty_history_body(inputs)
	if (locale === "it") return it_empty_history_body(inputs)
	if (locale === "nl") return nl_empty_history_body(inputs)
	if (locale === "pt") return pt_empty_history_body(inputs)
	if (locale === "da") return da_empty_history_body(inputs)
	if (locale === "sl") return sl_empty_history_body(inputs)
	if (locale === "hr") return hr_empty_history_body(inputs)
	if (locale === "ro") return ro_empty_history_body(inputs)
	if (locale === "sv") return sv_empty_history_body(inputs)
	if (locale === "fi") return fi_empty_history_body(inputs)
	return en_empty_history_body(inputs)
});