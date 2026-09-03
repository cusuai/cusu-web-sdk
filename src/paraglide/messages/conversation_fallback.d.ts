/**
* | output |
* | --- |
* | "Conversation" |
*
* @param {Conversation_FallbackInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const conversation_fallback: ((inputs?: Conversation_FallbackInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Conversation_FallbackInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Conversation_FallbackInputs = {};
