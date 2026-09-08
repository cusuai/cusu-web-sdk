/**
* | output |
* | --- |
* | "Call" |
*
* @param {Aria_CallInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_call: ((inputs?: Aria_CallInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_CallInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_CallInputs = {};
