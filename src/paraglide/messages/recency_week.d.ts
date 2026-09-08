/**
* | output |
* | --- |
* | "This week" |
*
* @param {Recency_WeekInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const recency_week: ((inputs?: Recency_WeekInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Recency_WeekInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Recency_WeekInputs = {};
