// Require JS  Config File

require.config({
	paths : {
		  "angular" : "lib/angular/angular",
		  "foundation" : "js/foundation.min",
		  "foundation.abide" : "js/lib/foundation/foundation.abide",
		  "foundation.interchange": "js/lib/foundation/foundation.interchange",
		  "foundation.abide": "js/lib/foundation/foundation.abide",
		  "foundation.dropdown": "js/lib/foundation/foundation.dropdown",
		  "foundation.placeholder": "js/lib/foundation/foundation.placeholder",
		  "foundation.forms": "js/lib/foundation/foundation.forms",
		  "foundation.alerts": "js/lib/foundation/foundation.alerts",
		  "foundation.magellan": "js/lib/foundation/foundation.magellan",
		  "foundation.reveal": "js/lib/foundation/foundation.reveal",
		  "foundation.tooltips": "js/lib/foundation/foundation.tooltips",
		  "foundation.clearing": "js/lib/foundation/foundation.clearing",
		  "foundation.cookie": "js/lib/foundation/foundation.cookie",
		  "foundation.joyride": "js/lib/foundation/foundation.joyride",
		  "foundation.orbit": "js/lib/foundation/foundation.orbit",
		  "foundation.section": "js/lib/foundation/foundation.section",
		  "foundation.topbar": "js/lib/foundation/foundation.topbar"		
	},
	shim : {
		angular  :{
			exports : "angular"
		}
	},
    baseUrl: 'js/'
});


require(["app"],
function(App) {
	App.initialize();
}
);