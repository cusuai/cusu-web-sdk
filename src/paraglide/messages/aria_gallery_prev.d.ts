/**
* | output |
* | --- |
* | "Previous image" |
*
* @param {Aria_Gallery_PrevInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_gallery_prev: ((inputs?: Aria_Gallery_PrevInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Gallery_PrevInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Gallery_PrevInputs = {};
