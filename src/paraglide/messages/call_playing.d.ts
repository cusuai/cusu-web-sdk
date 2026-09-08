/**
* | output |
* | --- |
* | "Assistant is answering" |
*
* @param {Call_PlayingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const call_playing: ((inputs?: Call_PlayingInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Call_PlayingInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Call_PlayingInputs = {};
