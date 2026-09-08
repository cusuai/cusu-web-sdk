/**
* | output |
* | --- |
* | "Transcribing…" |
*
* @param {Placeholder_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi" }} options
* @returns {LocalizedString}
*/
export const placeholder_transcribing: ((inputs?: Placeholder_TranscribingInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Placeholder_TranscribingInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de" | "fr" | "pl" | "hu" | "it" | "nl" | "pt" | "da" | "sl" | "hr" | "ro" | "sv" | "fi";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Placeholder_TranscribingInputs = {};
