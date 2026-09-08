/**
* | output |
* | --- |
* | "Rate {star} out of 5" |
*
* @param {Aria_Rating_StarInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_rating_star: ((inputs: Aria_Rating_StarInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Rating_StarInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Rating_StarInputs = {
    star: NonNullable<unknown>;
};
