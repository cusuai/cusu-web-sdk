/**
* | output |
* | --- |
* | "Close" |
*
* @param {Aria_CloseInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const aria_close: ((inputs?: Aria_CloseInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_CloseInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_CloseInputs = {};
