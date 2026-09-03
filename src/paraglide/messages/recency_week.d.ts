/**
* | output |
* | --- |
* | "This week" |
*
* @param {Recency_WeekInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const recency_week: ((inputs?: Recency_WeekInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Recency_WeekInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Recency_WeekInputs = {};
