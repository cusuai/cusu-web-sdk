/**
* | output |
* | --- |
* | "Cancel recording" |
*
* @param {Aria_Cancel_RecordingInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const aria_cancel_recording: ((inputs?: Aria_Cancel_RecordingInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aria_Cancel_RecordingInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aria_Cancel_RecordingInputs = {};
