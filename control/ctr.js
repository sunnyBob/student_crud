let data = {
	students: [
		{id: 1, name: 'Bob', age: 18, sex: 'm', hobby: 'song'},
		{id: 2, name: 'Sunny', age: 20, sex: 'm', hobby: 'dance'},
		{id: 3, name: 'Marry', age: 18, sex: 'v', hobby: 'swim'},
		{id: 4, name: 'Joke', age: 18, sex: 'm', hobby: 'book'},
		{id: 5, name: 'Wow', age: 22, sex: 'v', hobby: 'watch movice'},
	]
}

const remove = (arr, index) => {
	for(let i = index, len = arr.length; i < len; i++) {
		arr[i] = arr[i+1]
	}
	arr.length--
	return arr;
}

module.exports = {
	async stu_all (ctx, next) {
		let {id=0} = ctx.query
		console.log(ctx.query)
		if(id==0) {
			ctx.body = data
		} else {
			console.log(id)
			let stu_one = {}
		    stu_one.students = data.students[id-1]
		    console.log(stu_one)
			ctx.body = stu_one
		}
	},
	// async stu_one (ctx, next) {
	// 	console.log(233)
		
	// },
	async stu_save (ctx, next) {
		let {name='', age = '',sex = '',hobby = ''} = ctx.request.body
		const stu = {
			id: data.students.length+1,
			name,
			age,
			sex,
			hobby,
		}
		data.students.push(stu)
		ctx.body = {
			"code": 1,
			"message": "save success",
			"data": stu
		}
	},
	async stu_del (ctx, next) {
		// let {id} = ctx.params
		// data.students = remove(data.students, id-1)
		// ctx.body = data
	},
	async stu_modify (ctx, next) {
    	let {id,name='', age = '',sex = '',hobby = ''} = ctx.request.body
    	data.students[id-1].name = name
    	data.students[id-1].age = age
    	data.students[id-1].sex = sex
    	data.students[id-1].hobby = hobby
    	ctx.body = data
	},
	// async temp (ctx, next) {
	// 	ctx.type = 'html'
	// 	ctx.body = `
			
	// }
}