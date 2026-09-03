/**
* | output |
* | --- |
* | "Operator" |
*
* @param {Status_OperatorInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const status_operator: ((inputs?: Status_OperatorInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Status_OperatorInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Status_OperatorInputs = {};
