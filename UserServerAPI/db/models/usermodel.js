const connection = require('../connection');
const Schema = connection.Schema;

const userSchema = new Schema({
    'userid':{type:String, required:true, unique:true},
    'password':{type:String,  unique:true},
    'name':{type:String, required:true, unique:true},
    'DOB':{type:Date, default:Date.now()},
    'phonenumber':{type:Number, required:true, unique:true} 
})
const users = connection.model('userTask', userSchema);
module.exports = users;