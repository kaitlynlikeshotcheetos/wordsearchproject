import express from 'express';
import * as ctrl from '../controllers/mainController.js';
import * as auth from '../controllers/authController.js';


const router = express.Router();
import gameController from '../controllers/gameController.js';

router.get('/:category', gameController.getWords);

module.exports = router;

router.get('/login', auth.login);
router.post('/login', auth.verifyLogin);
router.get('/register', auth.register);
router.post('/register', auth.verifyRegister);
router.get('/logout', auth.logout);


//pages 
router.get('/', auth.isAuthenticated, ctrl.home);
router.get('/login-page', ctrl.loginPage);

            
export default router;

