define( (require) => {
    require('underscore')
    require('backbone')
    let stusView = require('stusView')
    const Router = Backbone.Router.extend({
        routes: {
            "/students":       "stusPage"
        },
        initialize () {
            new stusView
        },
        stusPage () {
            console.log(22)
            new stusView
        },

    })
    return Router

})