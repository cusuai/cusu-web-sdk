/**
* | output |
* | --- |
* | "Okay" |
*
* @param {Aria_Rating_OkInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_rating_ok: ((inputs?: Aria_Rating_OkInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Rating_OkInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Rating_OkInputs = {};
