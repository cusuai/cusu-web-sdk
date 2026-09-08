/**
* | output |
* | --- |
* | "Hide chat" |
*
* @param {Aria_Hide_ChatInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const aria_hide_chat: ((inputs?: Aria_Hide_ChatInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Hide_ChatInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Hide_ChatInputs = {};
