/**
* | output |
* | --- |
* | "Could not recognize speech." |
*
* @param {Error_Speech_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_speech_failed: ((inputs?: Error_Speech_FailedInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Speech_FailedInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Speech_FailedInputs = {};
