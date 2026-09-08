/**
* | output |
* | --- |
* | "Transcribing…" |
*
* @param {Placeholder_TranscribingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const placeholder_transcribing: ((inputs?: Placeholder_TranscribingInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Placeholder_TranscribingInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Placeholder_TranscribingInputs = {};
