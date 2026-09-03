/**
* | output |
* | --- |
* | "Older" |
*
* @param {Recency_OlderInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const recency_older: ((inputs?: Recency_OlderInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Recency_OlderInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Recency_OlderInputs = {};
