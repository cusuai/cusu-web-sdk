/**
* | output |
* | --- |
* | "Sizing, delivery, or just a gut check — ask away. We've got you." |
*
* @param {Empty_Chat_BodyInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const empty_chat_body: ((inputs?: Empty_Chat_BodyInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Empty_Chat_BodyInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Empty_Chat_BodyInputs = {};
