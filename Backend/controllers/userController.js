import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

const signup = async (req, res) => {
    try {
        console.log("signup");
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            console.log("user already exist");
        } else {
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
        if (userData) {
            const match = await bcrypt.compare(req.body.password, userData.password);
            if (match) {
                console.log("user logged in");
            } else {
                console.log("wrong password");
            }
        } else {
            console.log("no user");
        }
    } catch (error) {
        console.log("error");
    }
}

const editProfile = async (req, res) => {
    try {
        const { id, name, email, phone } = req.body
        const updated = await User.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name: name,
                    phone: phone,
                    email: email
                }
            },
            { new: true }
        )
        console.log(updated);
        // res.json({ userData: updated, status: true })
    } catch (error) {
        console.log(error.message);
    }
}

export {
    login,
    signup,
    editProfile
}