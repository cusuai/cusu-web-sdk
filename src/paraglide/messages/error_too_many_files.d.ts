/**
* | output |
* | --- |
* | "You can attach up to 5 files per message." |
*
* @param {Error_Too_Many_FilesInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_too_many_files: ((inputs?: Error_Too_Many_FilesInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Too_Many_FilesInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Too_Many_FilesInputs = {};
