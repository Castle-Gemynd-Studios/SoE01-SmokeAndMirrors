import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.SoE01SmokeAndMirrors',
	appResourcesPath: 'App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	appPath: 'src'
} as NativeScriptConfig;
