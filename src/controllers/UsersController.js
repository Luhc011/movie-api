const AppError = require('../utils/AppError')
class UsersController {
	async create(request, response) {
		const { name, email, password } = request.body

		if (!name) {
			throw new AppError('Name is required')
		}

		response.status(201).json({ name, email, password }); // status code 201 = created
	}
}

module.exports = UsersController;