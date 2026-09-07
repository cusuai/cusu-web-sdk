/**
* | output |
* | --- |
* | "Remove attachment" |
*
* @param {Aria_Remove_AttachmentInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_remove_attachment: ((inputs?: Aria_Remove_AttachmentInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Remove_AttachmentInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Remove_AttachmentInputs = {};
