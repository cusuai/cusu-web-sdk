/**
* | output |
* | --- |
* | "No conversations yet — go ahead and ask. We've got you." |
*
* @param {Empty_History_BodyInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const empty_history_body: ((inputs?: Empty_History_BodyInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Empty_History_BodyInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Empty_History_BodyInputs = {};
