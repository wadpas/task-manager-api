const getAllProductsStatic = async (req, res) => {
	throw new Error('testing async errors')
	res.status(200).json({ msg: 'test get all prods' })
}

const getAllProducts = async (req, res) => {
	res.status(200).json({ msg: 'get all prods' })
}

module.exports = {
	getAllProductsStatic,
	getAllProducts,
}