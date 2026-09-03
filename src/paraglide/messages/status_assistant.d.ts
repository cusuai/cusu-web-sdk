/**
* | output |
* | --- |
* | "Assistant" |
*
* @param {Status_AssistantInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const status_assistant: ((inputs?: Status_AssistantInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Status_AssistantInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Status_AssistantInputs = {};
