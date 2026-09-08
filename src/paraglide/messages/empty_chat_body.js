/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_Chat_BodyInputs */

const en_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sizing, delivery, or just a gut check — ask away. We've got you.`)
};

const cs_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Velikost, doručení, nebo jen pocit, že si nejsi jistý — klidně se zeptej. Jsme v tom s tebou.`)
};

const sk_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veľkosť, doručenie alebo len overenie — pokojne sa opýtajte. Sme v tom s vami.`)
};

const es_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tallas, entrega o simplemente una consulta — pregunta lo que quieras. Estamos aquí para ayudarte.`)
};

const de_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Größe, Lieferung oder einfach eine kurze Rückfrage — fragen Sie uns. Wir helfen Ihnen gerne.`)
};

const fr_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille, livraison ou simple vérification — posez votre question. Nous sommes là pour vous aider.`)
};

const pl_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmiar, dostawa lub szybka konsultacja — śmiało pytaj. Jesteśmy tu, aby Ci pomóc.`)
};

const hu_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Méret, szállítás vagy csak egy gyors kérdés — kérdezzen bátran. Szívesen segítünk.`)
};

const it_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taglia, consegna o un semplice consiglio — chiedi pure. Siamo qui per aiutarti.`)
};

const nl_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maat, bezorging of gewoon even overleggen — vraag maar. We helpen je graag.`)
};

const pt_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho, entrega ou apenas uma opinião — pergunta à vontade. Estamos aqui para ajudar.`)
};

const da_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Størrelse, levering eller bare et hurtigt råd — spørg bare. Vi er her for at hjælpe.`)
};

const sl_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Velikost, dostava ali samo hitro mnenje — kar vprašajte. Tukaj smo, da vam pomagamo.`)
};

const hr_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veličina, dostava ili samo brza provjera — slobodno pitajte. Tu smo da vam pomognemo.`)
};

const ro_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mărime, livrare sau doar o verificare rapidă — întrebați-ne. Suntem aici să vă ajutăm.`)
};

const sv_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storlek, leverans eller bara en snabb kontroll — fråga på. Vi finns här för att hjälpa dig.`)
};

const fi_empty_chat_body = /** @type {(inputs: Empty_Chat_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koko, toimitus tai vain nopea tarkistus — kysy rohkeasti. Autamme mielellämme.`)
};

/**
* | output |
* | --- |
* | "Sizing, delivery, or just a gut check — ask away. We've got you." |
*
* @param {Empty_Chat_BodyInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const empty_chat_body = /** @type {((inputs?: Empty_Chat_BodyInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Chat_BodyInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_chat_body(inputs)
	if (locale === "sk") return sk_empty_chat_body(inputs)
	if (locale === "es") return es_empty_chat_body(inputs)
	if (locale === "de") return de_empty_chat_body(inputs)
	if (locale === "fr") return fr_empty_chat_body(inputs)
	if (locale === "pl") return pl_empty_chat_body(inputs)
	if (locale === "hu") return hu_empty_chat_body(inputs)
	if (locale === "it") return it_empty_chat_body(inputs)
	if (locale === "nl") return nl_empty_chat_body(inputs)
	if (locale === "pt") return pt_empty_chat_body(inputs)
	if (locale === "da") return da_empty_chat_body(inputs)
	if (locale === "sl") return sl_empty_chat_body(inputs)
	if (locale === "hr") return hr_empty_chat_body(inputs)
	if (locale === "ro") return ro_empty_chat_body(inputs)
	if (locale === "sv") return sv_empty_chat_body(inputs)
	if (locale === "fi") return fi_empty_chat_body(inputs)
	return en_empty_chat_body(inputs)
});