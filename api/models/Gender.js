/**
 * Gender.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{type: 'number', autoIncrement: true, columnName: 'gender_id'},
    name:{type: 'string', maxLength: 50, required: true}

  },

};

