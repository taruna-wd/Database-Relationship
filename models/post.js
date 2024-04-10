

 //one to many (squillions)

const mongoose = require("mongoose");
const {Schema} = mongoose;


main().then(()=>{
  console.log("connection sucessfully")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

const userSchema = new Schema ({
  username : String ,
  email : String,
})

const postSchema = new Schema({
  content : String ,
  likes: Number ,
  user:{
    type : Schema.Types.ObjectId,
    ref :" User"

  }
}) ;


const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async ()=>{
//   let user =  await User.findOne({username: "gautam"});
  
//   // new User ({
//   //   username : "gautam" ,
//   //   email : " guatam@gmail.com",
//   // });
//   let post2 = new Post ({
//     content : "hello buddy",
//     likes : 50 ,
//   });
//    post2.user = user;
    //  let res1 = await  user1.save();
    //  console.log(res1);
//      let res2 =await post2.save();
//      console.log(res2);


// }
//  addData();
const getData = async ()=>{
  let get =  await Post.findOne({}).populate("user");
  console.log(get)
}
getData();



