/**
* | output |
* | --- |
* | "You can attach up to 5 files per message." |
*
* @param {Error_Too_Many_FilesInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" | "es" | "de" }} options
* @returns {LocalizedString}
*/
export const error_too_many_files: ((inputs?: Error_Too_Many_FilesInputs, options?: {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Too_Many_FilesInputs, {
    locale?: "en" | "cs" | "sk" | "es" | "de";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Too_Many_FilesInputs = {};
