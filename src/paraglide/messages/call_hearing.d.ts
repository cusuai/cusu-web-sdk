/**
* | output |
* | --- |
* | "I can hear you" |
*
* @param {Call_HearingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const call_hearing: ((inputs?: Call_HearingInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Call_HearingInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Call_HearingInputs = {};
