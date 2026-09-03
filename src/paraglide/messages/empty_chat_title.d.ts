/**
* | output |
* | --- |
* | "How can I help?" |
*
* @param {Empty_Chat_TitleInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const empty_chat_title: ((inputs?: Empty_Chat_TitleInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Empty_Chat_TitleInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Empty_Chat_TitleInputs = {};
