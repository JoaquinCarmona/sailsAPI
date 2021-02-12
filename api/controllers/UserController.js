/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create(req,res){
    let params = req.allParams();
    if(!params.first_name){
      return res.badRequest({err:'first_name field is required'});
    }
    User.create({
      first_name: params.first_name,
      last_name: params.last_name,
      birthday: params.birthday,
      password: params.password,
      gender_id: params.gender_id
    },(err, results) =>{
      if(err){
        return res.serverError(err);
      }
      return res.ok(results);
    });

  },
  async find(req,res){
    try{
      const users = await User.find().populate('gender_id');
      return res.ok(users);
    }catch (err){
      return res.serverError(err);
    }
  },
  async findOne(req,res){
    try{
      const user = await User.findOne({
        id: req.params.id
      });
      return res.ok(user);
    }catch (err){
      return res.serverError(err);
    }
  },
  async update(req,res){
    try{
      let params = req.allParams();
      let attributes = {};
      if(params.first_name){
        attributes.first_name = params.first_name;
      }
      if(params.last_name){
        attributes.last_name = params.last_name;
      }
      if(params.birthday){
        attributes.birthday = params.birthday;
      }
      if(params.secret){
        attributes.secret = params.secret;
      }
      if(params.gender_id){
        attributes.gender_id = params.gender_id;
      }
      const result = await User.update({id: req.params.id},attributes);
      return res.ok(result);
    }catch (err){
      return res.serverError(err);
    }
  },
  async delete(req,res){
    try{
      const result = await User.destroy({
        id: req.params.id
      });
      return res.ok(result);
    }catch (err){
      return res.serverError(err);
    }
  }
};

