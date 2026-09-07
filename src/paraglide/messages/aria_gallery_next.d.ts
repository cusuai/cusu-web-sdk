/**
* | output |
* | --- |
* | "Next image" |
*
* @param {Aria_Gallery_NextInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_gallery_next: ((inputs?: Aria_Gallery_NextInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Gallery_NextInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Gallery_NextInputs = {};
