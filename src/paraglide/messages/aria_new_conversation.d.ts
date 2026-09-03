/**
* | output |
* | --- |
* | "New conversation" |
*
* @param {Aria_New_ConversationInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_new_conversation: ((inputs?: Aria_New_ConversationInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_New_ConversationInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_New_ConversationInputs = {};
