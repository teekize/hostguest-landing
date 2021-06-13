const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HostSchema = new Schema(
    {
        firstName: { type: String, required: true, maxLength: 100 },
        lastName: { type: String, required: true, maxLength: 100 },
        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,

            required: true,
            minLength: 8
        },

        phoneNumber: {
            type: String,
            unique: true,
            minLength: 13
        }
    },

);

// Virtual for Host's full name
HostSchema
    .virtual('name')
    .get(function () {
        return this.last_name + ', ' + this.first_name;
    });

// Virtual for Host's lifespan
HostSchema
    .virtual('lifespan')
    .get(function () {
        return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
    });

// Virtual for Host's URL
HostSchema
    .virtual('url')
    .get(function () {
        return '/api/host/' + this._id;
    });

const HostModel = mongoose.model('Host', HostSchema);

module.exports = HostModel
