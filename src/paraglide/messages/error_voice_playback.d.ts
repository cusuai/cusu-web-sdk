/**
* | output |
* | --- |
* | "Could not play voice." |
*
* @param {Error_Voice_PlaybackInputs} inputs
* @param {{ locale?: "en" | "cs" }} options
* @returns {LocalizedString}
*/
export const error_voice_playback: ((inputs?: Error_Voice_PlaybackInputs, options?: {
    locale?: "en" | "cs";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_Voice_PlaybackInputs, {
    locale?: "en" | "cs";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_Voice_PlaybackInputs = {};
