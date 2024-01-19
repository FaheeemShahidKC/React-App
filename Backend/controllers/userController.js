import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

const signup = async (req, res) => {
    try {
        console.log("signup");
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            console.log("user already exist");
        }else {
            const bcryptedPassword = await bcrypt.hash(req.body.password, 10)
            const data = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: bcryptedPassword
            })
            const userData = await data.save()
            console.log(userData);
        }
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const userData = await User.findOne({ email: req.body.email })
    } catch (error) {
        console.log("error");
    }
}

export {
    login,
    signup
}