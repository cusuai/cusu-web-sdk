/**
* | output |
* | --- |
* | "No reply arrived. Try again." |
*
* @param {Error_Reply_TimeoutInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_reply_timeout: ((inputs?: Error_Reply_TimeoutInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Reply_TimeoutInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Reply_TimeoutInputs = {};
