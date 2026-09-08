/**
* | output |
* | --- |
* | "Allow microphone access." |
*
* @param {Error_Mic_DeniedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_mic_denied: ((inputs?: Error_Mic_DeniedInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Mic_DeniedInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Mic_DeniedInputs = {};
