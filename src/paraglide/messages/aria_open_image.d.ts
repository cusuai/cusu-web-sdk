/**
* | output |
* | --- |
* | "View image" |
*
* @param {Aria_Open_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_open_image: ((inputs?: Aria_Open_ImageInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Open_ImageInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Open_ImageInputs = {};
