const { Validator, ValidationError } = require('express-json-validator-middleware');

const validator = new Validator({ allErrors: true });
const validate = validator.validate;

const HostSchema = {
    type: 'object',
    required: ['firstName', 'lastName', 'email', 'password', 'phoneNumber'],
    properties: {
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        phoneNumber: {
            type: 'string'
        },


    }
}

const pattern = /^(0|\+254)\d{9}$/;

module.exports.HostSchema = HostSchema;
module.exports.validate = validate;
module.exports.ValidationError = ValidationError;
module.exports.pattern = pattern