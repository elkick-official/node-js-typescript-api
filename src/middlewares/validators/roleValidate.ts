const Joi = require('@hapi/joi')
const roleValidate = {
  create: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .required()
      .pattern(new RegExp(/^[a-zA-Z]+$/))
      .messages({
        'any.required': 'Name is mandatory.',
        'string.empty': 'Name is mandatory',
        'string.min': 'Name contains at least 2 character.',
        'string.pattern.base': 'Only Character allowed.',
      }),
  }),
}
export { roleValidate }
