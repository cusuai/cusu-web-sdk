/**
* | output |
* | --- |
* | "Conversation" |
*
* @param {Conversation_FallbackInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const conversation_fallback: ((inputs?: Conversation_FallbackInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Conversation_FallbackInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Conversation_FallbackInputs = {};
