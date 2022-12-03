import mongoose from "mongoose";
const connectorDb =()=>{
    if(mongoose.connections[0].readyState){
      
        return;
    }
    mongoose.connect(process.env.MONGODB_URI,{},error => {
        if(error) throw err;
console.log(err);
    })
}
export default connectorDb
