/**
* | output |
* | --- |
* | "Thanks for the rating." |
*
* @param {Rating_ThanksInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const rating_thanks: ((inputs?: Rating_ThanksInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Rating_ThanksInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Rating_ThanksInputs = {};
