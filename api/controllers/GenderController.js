/**
 * GenderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async find(req,res){
    try{
      const gender = await Gender.find();
      return res.ok(gender);
    }catch (err){
      return res.serverError(err);
    }
  }

};

