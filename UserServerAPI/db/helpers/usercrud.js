const userModel = require('../models/usermodel');
const appcodes = require('../../utils/appcodes')
const encrypt = require('../../utils/bcrypt');
const userOperations = {
    register(userObject, response){
        userModel.create(userObject, (err)=>{
            if(err){
                console.log("error in record add", err)
                response.status(appcodes.SERVER_ERROR).send({status : appcodes.ERROR, message:"Error in record add"});
            }
            else{
                console.log("Record addeed");
                response.status(appcodes.OK).send({status:appcodes.SUCCESS, message:'Record added'})
            }
        })
    },
        login(userObject, response){
            userModel.findOne({'userid': userObject.userid},(err, docs)=>{
                if(err){
                    console.log(err)
                    response.status(500).send({status: appcodes.ERROR, message:"Error in login operation"})
                }
                else if(docs){
                    if(encrypt.compareHash(userObject.password, docs.password)){
                    response.status(200).send({status : appcodes.SUCCESS, message:'Login successful, Welcome'+docs.userid})
                    }
                
                else{
                    response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL, message:'Invalid userid and password'});  
                }
            }
            else{
                response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL, message:'Invalid userid and password'});  
            }
            })
        }
}
module.exports = userOperations;