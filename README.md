Basic web, it includes:


requirejs
angularjs 
	- Controllers
	- Directives
	- Filters
	- Services


JS/CONFIG.JS

'use strict';

/* Filters */

define(function() {

	var call = {
		'lits': 'http://url.com/service-pages/?template=lits',
		'mascotas': 'http://url.es/service-pages/?template=mascota'

	};
    return call;
});
