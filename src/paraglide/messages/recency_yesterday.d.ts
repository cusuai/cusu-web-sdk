/**
* | output |
* | --- |
* | "Yesterday" |
*
* @param {Recency_YesterdayInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const recency_yesterday: ((inputs?: Recency_YesterdayInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Recency_YesterdayInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Recency_YesterdayInputs = {};
