/**
* | output |
* | --- |
* | "Connection lost. Try again." |
*
* @param {Error_Connection_LostInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const error_connection_lost: ((inputs?: Error_Connection_LostInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Connection_LostInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Connection_LostInputs = {};
