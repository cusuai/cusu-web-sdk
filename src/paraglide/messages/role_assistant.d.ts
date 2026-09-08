/**
* | output |
* | --- |
* | "Assistant" |
*
* @param {Role_AssistantInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const role_assistant: ((inputs?: Role_AssistantInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Role_AssistantInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Role_AssistantInputs = {};
