const AdminModel = require('../Models/Admin.model')

// const Registerer = async (name, email, password) =>{
//     try {
//         const check = await AdminModel.findOne({email})
//         if(check==null){
//             let hash = await argon2.hash(password)
//             const type = (email.includes("@masaischool.com") ? 'admin':'user')
//             const user = new AdminModel({email, password:hash, name, type})
//             await user.save()
//             return ({
//                 error:false,
//                 user
//             })
//         } else {
//             return ({
//                 error:true,
//                 msg:"Email already registered!"
//             })
//         }
//     } catch (error) {
//         return ({
//             error:true,
//             msg:"Something went wrong"
//         })
//     }
// }

const Loginner = async (email, password) =>{
    try {
        const check = await AdminModel.findOne({email})
        if(check==null){
            return ({
                error:true,
                msg:"Email not registered!"
            })
        } else {
            if(check.password == password){
                return ({
                    error:false,
                    user:check
                })
            } else {
                return ({
                    error:true,
                    msg:"Invalid Password"
                }) 
            }
        }
    } catch (error) {
        return ({
            error:true,
            msg:"Something went wrong"
        })
    }
}

module.exports = { Loginner }