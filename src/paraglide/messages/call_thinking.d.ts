/**
* | output |
* | --- |
* | "Thinking" |
*
* @param {Call_ThinkingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const call_thinking: ((inputs?: Call_ThinkingInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Call_ThinkingInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Call_ThinkingInputs = {};
