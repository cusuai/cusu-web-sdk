/**
* | output |
* | --- |
* | "How did we do?" |
*
* @param {Rating_PromptInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const rating_prompt: ((inputs?: Rating_PromptInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Rating_PromptInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Rating_PromptInputs = {};
