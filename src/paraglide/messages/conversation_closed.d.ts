/**
* | output |
* | --- |
* | "This conversation is closed." |
*
* @param {Conversation_ClosedInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const conversation_closed: ((inputs?: Conversation_ClosedInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Conversation_ClosedInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Conversation_ClosedInputs = {};
