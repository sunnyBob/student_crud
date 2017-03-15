define((require) => {
	require('underscore')
	require('backbone')
	const mustache = require('mustache')
	const Collection = require('collection')
	const model = require('model')
	const singleStuView = require('singleStuView')
	const View = Backbone.View.extend({

	  	el: ".container",

	  	events: {
			'click input[name=add]': "save",
			'click button': 'search'
	  	},

	  	templates: {
	  		stus_temp: require('stus_temp')
	  	},
	  	search () {
	  		var val = this.$(".search").val()
	  		this.collection.fetch({data:{id:val}, reset:true})
	  	},
	  	initialize () {
	  		this.$el.html(this.templates.stus_temp)
	  		this.collection = new Collection()
	  		this.collection.fetch({reset: true})
	    	this.listenTo(this.collection, "reset", this.render)
	    	// this.listenTo(this.collection, "sync", this.render)
	  	},

	  	save (e) {
	  		e.preventDefault()
	  		const data = {
	  			name: this.$('input[name=name]').val(),
	  			age: this.$('input[name=age]').val(),
	  			sex: this.$('input[name=sex]').val(),
	  			hobby: this.$('input[name=hobby]').val(),
	  		}

	  		this.collection.create(data)
	  		this.collection.on("sync", this.render())

	  	},

	  	render () {
	  		var html = []
	  		this.collection.forEach((model,resp) => {
	  			console.log(model.toJSON(),resp)
	  			html.push(new singleStuView({model: model}).el)
	  		})
	    	this.$("tbody").html(html)
	    	console.log(html)
	  	}

	})
	return View
}) 