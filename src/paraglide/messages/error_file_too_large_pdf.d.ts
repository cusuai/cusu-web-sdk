/**
* | output |
* | --- |
* | "PDFs can be at most 16 MB." |
*
* @param {Error_File_Too_Large_PdfInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_file_too_large_pdf: ((inputs?: Error_File_Too_Large_PdfInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_File_Too_Large_PdfInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_File_Too_Large_PdfInputs = {};
