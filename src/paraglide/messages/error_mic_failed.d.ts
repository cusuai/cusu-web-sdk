/**
* | output |
* | --- |
* | "Could not start the microphone." |
*
* @param {Error_Mic_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_mic_failed: ((inputs?: Error_Mic_FailedInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Mic_FailedInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Mic_FailedInputs = {};
