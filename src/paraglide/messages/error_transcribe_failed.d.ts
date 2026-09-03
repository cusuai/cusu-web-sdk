/**
* | output |
* | --- |
* | "Transcription failed." |
*
* @param {Error_Transcribe_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_transcribe_failed: ((inputs?: Error_Transcribe_FailedInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Transcribe_FailedInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Transcribe_FailedInputs = {};
