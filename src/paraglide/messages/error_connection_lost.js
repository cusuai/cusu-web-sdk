/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Connection_LostInputs */

const en_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connection lost. Try again.`)
};

const cs_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Připojení se ztratilo. Zkuste to znovu.`)
};

const sk_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pripojenie sa prerušilo. Skúste to znova.`)
};

const es_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se perdió la conexión. Inténtalo de nuevo.`)
};

const de_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbindung unterbrochen. Versuchen Sie es erneut.`)
};

const fr_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connexion perdue. Réessayez.`)
};

const pl_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utracono połączenie. Spróbuj ponownie.`)
};

const hu_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Megszakadt a kapcsolat. Próbálja újra.`)
};

const it_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connessione persa. Riprova.`)
};

const nl_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbinding verbroken. Probeer het opnieuw.`)
};

const pt_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ligação perdida. Tenta novamente.`)
};

const da_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forbindelsen blev afbrudt. Prøv igen.`)
};

const sl_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Povezava je bila prekinjena. Poskusite znova.`)
};

const hr_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veza je prekinuta. Pokušajte ponovno.`)
};

const ro_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conexiunea s-a întrerupt. Încercați din nou.`)
};

const sv_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anslutningen bröts. Försök igen.`)
};

const fi_error_connection_lost = /** @type {(inputs: Error_Connection_LostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yhteys katkesi. Yritä uudelleen.`)
};

/**
* | output |
* | --- |
* | "Connection lost. Try again." |
*
* @param {Error_Connection_LostInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const error_connection_lost = /** @type {((inputs?: Error_Connection_LostInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Connection_LostInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_error_connection_lost(inputs)
	if (locale === "sk") return sk_error_connection_lost(inputs)
	if (locale === "es") return es_error_connection_lost(inputs)
	if (locale === "de") return de_error_connection_lost(inputs)
	if (locale === "fr") return fr_error_connection_lost(inputs)
	if (locale === "pl") return pl_error_connection_lost(inputs)
	if (locale === "hu") return hu_error_connection_lost(inputs)
	if (locale === "it") return it_error_connection_lost(inputs)
	if (locale === "nl") return nl_error_connection_lost(inputs)
	if (locale === "pt") return pt_error_connection_lost(inputs)
	if (locale === "da") return da_error_connection_lost(inputs)
	if (locale === "sl") return sl_error_connection_lost(inputs)
	if (locale === "hr") return hr_error_connection_lost(inputs)
	if (locale === "ro") return ro_error_connection_lost(inputs)
	if (locale === "sv") return sv_error_connection_lost(inputs)
	if (locale === "fi") return fi_error_connection_lost(inputs)
	return en_error_connection_lost(inputs)
});