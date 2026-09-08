/**
* | output |
* | --- |
* | "Dictation is not available in this browser." |
*
* @param {Error_Dictation_UnavailableInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_dictation_unavailable: ((inputs?: Error_Dictation_UnavailableInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Dictation_UnavailableInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Dictation_UnavailableInputs = {};
