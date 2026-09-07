/**
* | output |
* | --- |
* | "PDF" |
*
* @param {File_Kind_PdfInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const file_kind_pdf: ((inputs?: File_Kind_PdfInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<File_Kind_PdfInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type File_Kind_PdfInputs = {};
