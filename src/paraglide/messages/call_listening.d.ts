/**
* | output |
* | --- |
* | "Listening — you can speak" |
*
* @param {Call_ListeningInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const call_listening: ((inputs?: Call_ListeningInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Call_ListeningInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Call_ListeningInputs = {};
