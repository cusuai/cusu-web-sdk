/**
* | output |
* | --- |
* | "Could not upload the file." |
*
* @param {Error_Upload_FailedInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_upload_failed: ((inputs?: Error_Upload_FailedInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Upload_FailedInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Upload_FailedInputs = {};
