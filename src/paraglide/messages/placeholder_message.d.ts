/**
* | output |
* | --- |
* | "Message…" |
*
* @param {Placeholder_MessageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const placeholder_message: ((inputs?: Placeholder_MessageInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Placeholder_MessageInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Placeholder_MessageInputs = {};
