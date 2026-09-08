/**
* | output |
* | --- |
* | "Transcribed" |
*
* @param {Status_TranscribedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const status_transcribed: ((inputs?: Status_TranscribedInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Status_TranscribedInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Status_TranscribedInputs = {};
