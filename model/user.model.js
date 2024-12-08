const mongoose=require('mongoose');
const db=require('../config/db');
const bcrypt=require('bcrypt');
const{Schema}=mongoose;

const userSchema=new Schema({   
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    
        unique:true
    }
});

userSchema.pre('save',async  function(){
    try {
        var user=this;
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(user.password,salt);
        user.password=hash;
    } catch (error) {
        throw error;
        
    }

});

userSchema.methods.comparePassword=async function(userPassword){
    try {
        const isMatch=await bcrypt.compare(userPassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }

};
const userModel=db.model('user',userSchema);
module.exports=userModel;