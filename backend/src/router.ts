import { Router } from 'express';
import { body } from 'express-validator';
import { createAccount } from './handlers';
import { login } from './handlers';
import { handleInputErrors } from './middleware/validation';

const router = Router();

/** Autenticacion y Registro */
router.post('/auth/register', 
    body('handle')
    .notEmpty()
    .withMessage('El handle es requerido'),

    body('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    body('email')
    .isEmail()
    .withMessage('E-mail no valido '),

    body('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),

    handleInputErrors,
    createAccount);

    router.post('/auth/login',
    
    body('email')
    .isEmail()
    .withMessage('E-mail no valido '),

    body('password')
    .notEmpty()
    .withMessage('El password es obligatorio'),
    handleInputErrors,
    

    login
    )

    

export default router;

