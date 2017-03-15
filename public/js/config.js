requirejs.config({
	baseUrl: '../',
	paths: {
		'jquery':        'js/libs/jquery.min',
		'mustache':     'js/libs/mustache',
		'backbone':      'js/libs/backbone',
		'underscore':    'js/libs/underscore',
		'model':         'js/model/model',
		'collection':    'js/model/collection',
		'stusView':      'js/view/stusView',
		'singleStuView': 'js/view/singleStuView',
		'stus_temp':     'temp/stus_temp.html',
		'modify_temp':   'temp/modify_temp.html',
		'singleStu_temp':'temp/singleStu_temp.html',
		'router':        'js/route/router'
	}
})
require(['../js/route/router', '../js/app.js'], (Router) => {
	let router = new Router()
	Backbone.history.start({pushState:true}) 
})