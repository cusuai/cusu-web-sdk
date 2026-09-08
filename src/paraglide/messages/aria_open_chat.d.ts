/**
* | output |
* | --- |
* | "Open chat" |
*
* @param {Aria_Open_ChatInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_open_chat: ((inputs?: Aria_Open_ChatInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Open_ChatInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Open_ChatInputs = {};
