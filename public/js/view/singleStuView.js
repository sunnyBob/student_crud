define((require) => {
	require('underscore')
	require('backbone')
	const mustache = require('mustache')

	const View = Backbone.View.extend({

	  	tagName: 'tr',

	  	events: {
			'click a[name=modify]': 'modifyRender',
			'click a[name=confirm]': 'modify',
			'click a[name=cannel]': 'render'
	  	},

	  	templates: {
	  		singleStu_temp: require('singleStu_temp'),
	  		modify_temp: require('modify_temp')
	  	},
	  	initialize () {
	    	this.render()
	    	this.listenTo(this.model, "sync", this.render)
	  	},
	  	modifyRender (e) {
	  		var target = $(e.target)
			var template = this.templates.modify_temp
			this.$el.html(template)
			var value = this.model.toJSON()
			this.$("input[name=name]").val(value.name)
			this.$("input[name=id]").val(value.id)
			this.$("input[name=age]").val(value.age)
			this.$("input[name=sex]").val(value.sex)
			this.$("input[name=hobby]").val(value.hobby)
	  	},
	  	modify () {
	  		const stu = {
	  			id: this.$("input[name=id]").val(),
	  			name: this.$("input[name=name]").val(),
	  			age: this.$("input[name=age]").val(),
	  			sex: this.$("input[name=sex]").val(),
	  			hobby: this.$("input[name=hobby]").val()
	  		}
	  		console.log(this.$("input[name=id]").val(),this.$("input[name=name]").val())
			this.model.save(stu)
	  	},
	  	render () {
	  		let data = this.model.toJSON()
	  		this.$el.html(mustache.render(this.templates.singleStu_temp, data))
	  	}

	})
	return View
}) 