module.exports.home = async (req,res)=>{
    try{
return res.render('craving');
    }
    catch(err){
        return;
    }
}
module.exports.foodlist = async (req,res)=>{
    try{
return res.render('foodlist');
    }
    catch(err){
        return;
    }
}
