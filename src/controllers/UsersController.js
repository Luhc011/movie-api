class UsersController {
	create(request, response) {
		const { name, email, password } = request.body

		response.status(201).json({ name, email, password }); // status code 201 = created
	}
}

module.exports = UsersController;