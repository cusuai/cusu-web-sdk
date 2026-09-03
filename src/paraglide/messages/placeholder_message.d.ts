/**
* | output |
* | --- |
* | "Message…" |
*
* @param {Placeholder_MessageInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const placeholder_message: ((inputs?: Placeholder_MessageInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Placeholder_MessageInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Placeholder_MessageInputs = {};
