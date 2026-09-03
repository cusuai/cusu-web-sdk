/**
* | output |
* | --- |
* | "Transcribed" |
*
* @param {Status_TranscribedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const status_transcribed: ((inputs?: Status_TranscribedInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Status_TranscribedInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Status_TranscribedInputs = {};
