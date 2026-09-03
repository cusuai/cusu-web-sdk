/**
* | output |
* | --- |
* | "Nothing here yet" |
*
* @param {Empty_History_TitleInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const empty_history_title: ((inputs?: Empty_History_TitleInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Empty_History_TitleInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Empty_History_TitleInputs = {};
