/**
* | output |
* | --- |
* | "current" |
*
* @param {Status_CurrentInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const status_current: ((inputs?: Status_CurrentInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Status_CurrentInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Status_CurrentInputs = {};
