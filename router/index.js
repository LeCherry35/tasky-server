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

router.post('/addTodo', authMiddleware,todoController.addTodo)
router.get('/getTodos', authMiddleware, todoController.getTodos)
router.delete('/deleteTodo', authMiddleware,todoController.deleteTodo)
router.put('/editTodo/', authMiddleware,todoController.editTodo)
router.put('/setDone', authMiddleware,todoController.setDone)
router.put('/setUndone', authMiddleware,todoController.setUndone)
router.delete('/deleteAll', authMiddleware,todoController.deleteAll)

module.exports = router