define((require) => {
	require('underscore')
	require('backbone')
	const model = require('model')
	const Collection = Backbone.Collection.extend({
		url: '/students',
		model: model,
		parse (response) {
		    return response.students;
		}
	})
	return Collection
})