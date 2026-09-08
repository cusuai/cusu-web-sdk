/**
* | output |
* | --- |
* | "The conversation was handed over to an operator." |
*
* @param {Conversation_TransferredInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const conversation_transferred: ((inputs?: Conversation_TransferredInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Conversation_TransferredInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Conversation_TransferredInputs = {};
