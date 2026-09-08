/**
* | output |
* | --- |
* | "Back to overview" |
*
* @param {Aria_Back_To_ListInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const aria_back_to_list: ((inputs?: Aria_Back_To_ListInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Back_To_ListInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Back_To_ListInputs = {};
