/**
* | output |
* | --- |
* | "Thumbs down" |
*
* @param {Aria_Rating_DownInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_rating_down: ((inputs?: Aria_Rating_DownInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Rating_DownInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Rating_DownInputs = {};
