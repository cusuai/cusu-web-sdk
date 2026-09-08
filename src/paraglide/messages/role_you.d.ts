/**
* | output |
* | --- |
* | "You" |
*
* @param {Role_YouInputs} inputs
* @param {{ locale?: "en" | "cs" | "sk" }} options
* @returns {LocalizedString}
*/
export const role_you: ((inputs?: Role_YouInputs, options?: {
    locale?: "en" | "cs" | "sk";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Role_YouInputs, {
    locale?: "en" | "cs" | "sk";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Role_YouInputs = {};
