define((require) => {
	require('underscore')
	require('backbone')
	const router = new Backbone.Router()
	router.navigate("/students", {trigger: true});
})