/**
* | output |
* | --- |
* | "Thumbs up" |
*
* @param {Aria_Rating_UpInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_rating_up: ((inputs?: Aria_Rating_UpInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Rating_UpInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Rating_UpInputs = {};
