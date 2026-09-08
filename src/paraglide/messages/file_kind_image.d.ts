/**
* | output |
* | --- |
* | "Image" |
*
* @param {File_Kind_ImageInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const file_kind_image: ((inputs?: File_Kind_ImageInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<File_Kind_ImageInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type File_Kind_ImageInputs = {};
