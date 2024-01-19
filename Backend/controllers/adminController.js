import Admin from '../models/adminModel.js'
import bcrypt from 'bcrypt'
import User from '../models/userModel.js'

const login = async (req, res) => {
     try {
          const isAdmin = await Admin.findOne({ email: req.body.email })
          if (isAdmin) {
               await bcrypt.compare(req.body.password, isAdmin.password).then((isPassword) => {
                    if (isPassword) {
                         console.log("admin loged");
                    } else {
                         console.log("wrong pass");
                    }
               }).catch((error) => {
                    console.log(error);
               })
          } else {
               console.log('wrong email');
          }
     } catch (error) {
          console.log(error);
     }
}

const listUsers = async (req, res) => {
     try {
          const users = await User.find({})
          if (users) {
               console.log(users);
          } else {
               console.log("no users");
          }
     } catch (error) {
          console.log(error);
     }
}

const deleteUser = async (req, res) => {
     try {
          const deleteUser = await User.deleteOne({ _id: req.body.id })
          if (deleteUser) {
               console.log(deleteUser);
          } else {
               console.log("not deleted");
          }
     } catch (error) {
          console.log(error);
     }
}

const loadEditUser = async (req, res) => {
     try {
          const userData = await User.findOne({ _id: req.body.id })
          if (userData) {
               console.log("loaded edit use with data");
               console.log(userData);
          } else {
               console.log("no user to edit");
          }
     } catch (error) {
          console.log(error);
     }
}

const editUser = async (req, res) => {
     try {
          const { name, phone, email, id } = req.body
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
     } catch (error) {
          console.log(error.message);
     }
}

const addUser = async (req, res) => {
     try {
          const checkExist = await User.findOne({ email: req.body.email })
          if (checkExist) {
               console.log("user exist already");
          } else {
               const data = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    phone: req.body.phone
               })

               const userData = await data.save()
               console.log("added user");
               console.log(userData);
          }
     } catch (error) {
          console.log(error.message);
     }
}

export {
     login,
     listUsers,
     deleteUser,
     loadEditUser,
     addUser,
     editUser
}
