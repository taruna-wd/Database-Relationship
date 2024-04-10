
// one to few
const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=>{
  console.log("connection sucessfully")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

// Scheme define
const userSchema = new Schema({
  username :String,
  addresses : [
    {
      _id : false , // individual id generate nhi hogi id false krne se
      location:String,
      city:String
    }
  ],
}) ;

//  model define
const User = mongoose.model("User", userSchema);

//function define
const addUser = async ()=>{
  let user1 = new User({
    username : "taruna",
    addresses:[{
      location:" D4/398 rohini delhi",
      city : "india"
    }  // yha bi add kr sakteh niche push vale address ko  { location: " D5/404 Madipur" , city:"india" } 
  ]
  });
  user1.addresses.push({ location: " D5/404 Madipur" , city:"india" }); // other way to add data in dataBASE
  let result = await user1.save();
  console.log(result)
};

addUser();