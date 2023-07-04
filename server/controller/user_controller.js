import User from "../models/user.js"
export const addUser = async (req , res)=>{
    try {
        let exist = await User.findOne({sub:req.body.sub});
        if(exist){
            res.status(200).json({msg : "The user is already exist in the database"});
            return ;
        }
        const newUser = new User(req.body);
        await newUser.save();
        console.log("New User added in the Database ");
        return res.status(200).json(newUser);
    } catch (error) {
        console.log("Some error occured while adding user in the database ", error);
        return res.status(500).json(error);
    }
}
export const getUsers = async(req , res)=>{
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }

}