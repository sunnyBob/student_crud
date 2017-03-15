define((require) => {
	require('underscore')
	require('backbone')
	var Model = Backbone.Model.extend({
		urlRoot : '/students'
	})
	return Model
})