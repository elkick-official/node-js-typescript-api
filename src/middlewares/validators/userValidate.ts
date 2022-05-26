const Joi = require('@hapi/joi')
const userValidate = {
  register: Joi.object().keys({
    userType: Joi.string()
      .min(1)
      .required()
      .pattern(new RegExp(/^[0-1]{1}$/))
      .messages({
        'any.required': 'user type is mandatory.',
        'string.base': 'user type must be string.',
        'string.empty': 'user type its mandatory',
        'string.min': 'user Type contains at least 1 character.',
        'string.pattern.base': 'Invalid Validation.',
      }),
    firstName: Joi.string()
      .min(2)
      .required()
      .pattern(new RegExp(/^[a-zA-Z ]+$/))
      .messages({
        'any.required': 'First Name is mandatory.',
        'string.empty': 'First Name is mandatory',
        'string.min': 'First Name contains at least 2 character.',
        'string.pattern.base': 'Only Character allowed.',
      }),
    lastName: Joi.string()
      .min(2)
      .required()
      .pattern(new RegExp(/^[a-zA-Z ]+$/))
      .messages({
        'any.required': 'Last Name is mandatory.',
        'string.empty': 'Last Name is mandatory',
        'string.min': 'Last Name contains at least 2 character.',
        'string.pattern.base': 'Only Character allowed.',
      }),
    userName: Joi.string()
      .min(5)
      .required()
      .pattern(new RegExp(/^[a-zA-Z0-9]+$/))
      .messages({
        'any.required': 'User Name is mandatory.',
        'string.empty': 'User Name is mandatory',
        'string.min': 'User Name contains at least 5 character.',
        'string.pattern.base': 'Only character and numbers are allowed.',
      }),
    email: Joi.string().min(3).required().email().messages({
      'any.required': 'email is mandatory.',
      'string.empty': 'email is mandatory',
      'string.email': 'Invalid email address',
    }),
    password: Joi.string()
      .required()
      .pattern(
        new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,12}$/),
      )
      .messages({
        'any.required': 'password is mandatory.',
        'string.empty': 'password is mandatory',
        'string.pattern.base':
          'password length must be between 8,12 and must containt at leat 1 latter,1 digit and 1 special symbol(!@#$%^&*)',
      }),
    repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
      'any.required': 'Repeat Password is mandatory.',
      'string.empty': 'Repeat Password is mandatory',
      'any.only': 'Password does not match',
    }),
  }),

  login: Joi.object().keys({
    email: Joi.string().min(3).required().email().messages({
      'any.required': 'email is mandatory.',
      'string.empty': 'email is mandatory',
      'string.email': 'Invalid email address',
    }),
    password: Joi.string().required().messages({
      'any.required': 'password is mandatory.',
      'string.empty': 'password is mandatory',
    }),
  }),
}

export { userValidate }
