declare const __CUSU_SDK_VERSION__: string | undefined;

/** Build-time SDK version reported to the API. */
export const SDK_VERSION: string =
	typeof __CUSU_SDK_VERSION__ === 'string' && __CUSU_SDK_VERSION__ ? __CUSU_SDK_VERSION__ : '0.3.3';
