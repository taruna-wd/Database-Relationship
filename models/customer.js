const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=>{
  console.log("connection sucessfully")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}
// schema define   
const customer = new Schema({
  item : String,
  price : Number
});

//customer schema
 const customerSchema = new Schema({
  name : String,
  orders : [{
     type : Schema.Types.ObjectId ,
     ref: " Order"
  }]
 });

// model define 
const Order = mongoose.model("Order",  customer);

const Customer = mongoose.model("Customer", customerSchema);


// function define

const addCustomer = async ()=>{
  let cust1 = new Customer ({
    name : "yash"
  });
  let order1 = await Order.findOne({ item : "chips"});
    // let order2 = await Order.findOne({item : "cock"});
    cust1.orders.push(order1);
    // cust2.orders.push(order2);
    
  let result = await cust1.save();
  console.log(result)

};
addCustomer();
// const addOrders = async ()=>{
//    let All = await Order.insertMany(
//      {item : "cock" , price : 40},
//      {item :"kurkure", price : 50}, 
//   );
//    console.log(All);
// }

// addOrders();

const findCustomer = async ()=>{
  let res = await  Customer.find({}).populate("orders");
  console.log(res[0]);
};

