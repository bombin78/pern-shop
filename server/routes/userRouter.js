const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/auth', authMiddleware, userController.check);
router.post('/registration', userController.registration);
router.post('/login', userController.login);
// router.delete('/', async(req, res) => {
//     const id = req.params.id;
//     const query = {_id: ObjectId(id)};
//     const result = await userCollection.deleteOne(query);
//     res.send(result);
// });


module.exports = router;