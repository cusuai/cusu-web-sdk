/**
* | output |
* | --- |
* | "Today" |
*
* @param {Recency_TodayInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const recency_today: ((inputs?: Recency_TodayInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Recency_TodayInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Recency_TodayInputs = {};
