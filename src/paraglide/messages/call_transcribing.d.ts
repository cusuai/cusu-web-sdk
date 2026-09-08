/**
* | output |
* | --- |
* | "Transcribing what you said…" |
*
* @param {Call_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const call_transcribing: ((inputs?: Call_TranscribingInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Call_TranscribingInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Call_TranscribingInputs = {};
