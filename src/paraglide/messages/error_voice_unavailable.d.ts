/**
* | output |
* | --- |
* | "Voice calling is not available." |
*
* @param {Error_Voice_UnavailableInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_voice_unavailable: ((inputs?: Error_Voice_UnavailableInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Voice_UnavailableInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Voice_UnavailableInputs = {};
