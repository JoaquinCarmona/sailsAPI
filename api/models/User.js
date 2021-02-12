/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',
  attributes: {
    id : { type : 'number', autoIncrement: true, columnName: 'user_id', unique:true  },
    first_name : { type : 'string' },
    last_name : { type : 'string' },
    birthday : {  type: 'ref', columnType: 'date'  },
    password : { type : 'string' },

    //Associations
    gender_id:{
      model: 'Gender',
      columnName: 'gender_id',
      required : true
    }
  }


};

