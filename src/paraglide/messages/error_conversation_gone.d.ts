/**
* | output |
* | --- |
* | "This conversation no longer exists." |
*
* @param {Error_Conversation_GoneInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_conversation_gone: ((inputs?: Error_Conversation_GoneInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Conversation_GoneInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Conversation_GoneInputs = {};
