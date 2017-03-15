const ctr = require('../control/ctr')

module.exports = router => {
	// router.get("/*", ctr.temp)
	// router.get('/students/:id', ctr.stu_one)
	router.get('/students', ctr.stu_all)
	router.delete('/students/:id', ctr.stu_del)
	router.post('/students', ctr.stu_save)
	router.put('/students/:id', ctr.stu_modify)
}