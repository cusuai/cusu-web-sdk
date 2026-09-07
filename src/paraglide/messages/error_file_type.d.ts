/**
* | output |
* | --- |
* | "Only images (JPEG, PNG, GIF, WebP) and PDFs are allowed." |
*
* @param {Error_File_TypeInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_file_type: ((inputs?: Error_File_TypeInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_File_TypeInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_File_TypeInputs = {};
