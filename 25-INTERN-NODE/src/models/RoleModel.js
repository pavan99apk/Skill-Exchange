// // //database 
// // const mongoose = require("mongoose")
// // const Schema = mongoose.Schema;

// // const roleSchema = new Schema({

// //     name:{
// //         type:String,
// //     },
// //     description:{
// //         type:String
// //     }
// // })


    


// // module.exports = mongoose.model("roles",roleSchema)

// // //roles[roleSchema]
// const mongoose = require("mongoose");

// const roleSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true }, // Role name (e.g., Admin, User)
//   permissions: { type: [String], default: [] } // List of permissions for the role
// }, { timestamps: true });

// module.exports = mongoose.model("Role", roleSchema);
// const mongoose = require("mongoose");
// const { Schema } = mongoose; // <-- Add this line
// const roleSchema = new Schema({
//     name: { type: String, required: true },
//     permissions: [{ type: String, required: true }]
// });

// module.exports = mongoose.model("roles", roleSchema);
//database 
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    //fileds /// get

    name:{
        type:String,
    },
    description:{
        type:String
    }

})

module.exports = mongoose.model("roles",roleSchema)

//roles[roleSchema]