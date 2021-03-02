import { check } from 'express-validator'
export const checkEmail = [
      check('email').normalizeEmail().isEmail(),
]