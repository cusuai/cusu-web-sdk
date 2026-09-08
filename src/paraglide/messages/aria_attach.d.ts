/**
* | output |
* | --- |
* | "Attach a file" |
*
* @param {Aria_AttachInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_attach: ((inputs?: Aria_AttachInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_AttachInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_AttachInputs = {};
