// Require JS  Config File

require.config({
	paths : {
		"jquery.min" : "jquery-1.8.0.min",
		"angular" : "lib/angular/angular",
		"jquery.easing" : "jquery.easing.1.3",
		"bootstrap.min" : "bootstrap.min",
		"spinner.js" : "spinner.js",
		"jquery.mobile.customized.min" : "jquery.mobile.customized.min",
		"modernizr.min" : "vendor/modernizr-2.6.1.min",
		"loadanim" : "loadanim",
		"mainmetro" : "mainmetro",
		"add2home" : "add2home"
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