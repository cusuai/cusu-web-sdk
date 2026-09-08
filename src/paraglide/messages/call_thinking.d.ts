/**
* | output |
* | --- |
* | "Thinking" |
*
* @param {Call_ThinkingInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const call_thinking: ((inputs?: Call_ThinkingInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Call_ThinkingInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Call_ThinkingInputs = {};
