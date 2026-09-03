/**
* | output |
* | --- |
* | "The conversation was handed over to an operator." |
*
* @param {Conversation_TransferredInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const conversation_transferred: ((inputs?: Conversation_TransferredInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Conversation_TransferredInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Conversation_TransferredInputs = {};
