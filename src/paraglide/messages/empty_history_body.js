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

/**
* | output |
* | --- |
* | "No conversations yet — go ahead and ask. We've got you." |
*
* @param {Empty_History_BodyInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const empty_history_body = /** @type {((inputs?: Empty_History_BodyInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_History_BodyInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_empty_history_body(inputs)
	if (locale === "sk") return sk_empty_history_body(inputs)
	if (locale === "es") return es_empty_history_body(inputs)
	if (locale === "de") return de_empty_history_body(inputs)
	return en_empty_history_body(inputs)
});