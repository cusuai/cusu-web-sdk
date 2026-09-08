/**
* | output |
* | --- |
* | "Recording is too short." |
*
* @param {Error_Recording_ShortInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_recording_short: ((inputs?: Error_Recording_ShortInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Recording_ShortInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Recording_ShortInputs = {};
