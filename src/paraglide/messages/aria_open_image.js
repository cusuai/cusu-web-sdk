/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aria_Open_ImageInputs */

const en_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View image`)
};

const cs_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobrazit obrázek`)
};

const sk_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobraziť obrázok`)
};

const es_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver imagen`)
};

const de_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild ansehen`)
};

const fr_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher l’image`)
};

const pl_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetl obraz`)
};

const hu_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kép megtekintése`)
};

const it_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizza immagine`)
};

const nl_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding bekijken`)
};

const pt_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver imagem`)
};

const da_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vis billede`)
};

const sl_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prikaži sliko`)
};

const hr_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prikaži sliku`)
};

const ro_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afișează imaginea`)
};

const sv_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa bild`)
};

const fi_aria_open_image = /** @type {(inputs: Aria_Open_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Näytä kuva`)
};

/**
* | output |
* | --- |
* | "View image" |
*
* @param {Aria_Open_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_open_image = /** @type {((inputs?: Aria_Open_ImageInputs, options?: { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aria_Open_ImageInputs, { locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "cs") return cs_aria_open_image(inputs)
	if (locale === "sk") return sk_aria_open_image(inputs)
	if (locale === "es") return es_aria_open_image(inputs)
	if (locale === "de") return de_aria_open_image(inputs)
	if (locale === "fr") return fr_aria_open_image(inputs)
	if (locale === "pl") return pl_aria_open_image(inputs)
	if (locale === "hu") return hu_aria_open_image(inputs)
	if (locale === "it") return it_aria_open_image(inputs)
	if (locale === "nl") return nl_aria_open_image(inputs)
	if (locale === "pt") return pt_aria_open_image(inputs)
	if (locale === "da") return da_aria_open_image(inputs)
	if (locale === "sl") return sl_aria_open_image(inputs)
	if (locale === "hr") return hr_aria_open_image(inputs)
	if (locale === "ro") return ro_aria_open_image(inputs)
	if (locale === "sv") return sv_aria_open_image(inputs)
	if (locale === "fi") return fi_aria_open_image(inputs)
	return en_aria_open_image(inputs)
});