/**
* | output |
* | --- |
* | "Searching the website…" |
*
* @param {Activity_Search_PagesInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const activity_search_pages: ((inputs?: Activity_Search_PagesInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Activity_Search_PagesInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Activity_Search_PagesInputs = {};
