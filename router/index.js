const Router = require('express').Router
const userController = require('../controllers/user-controller')

const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')
const todoController = require('../controllers/todo-controller')

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

router.post('/addTodo', todoController.addTodo)
router.get('/getTodos', todoController.getTodos)
router.delete('/deleteTodo', todoController.deleteTodo)
router.put('/editTodo/', todoController.editTodo)
router.put('/setDone', todoController.setDone)
router.put('/setUndone', todoController.setUndone)

module.exports = router