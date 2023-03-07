// For Connect with MongoDB -> this is all

import mongoose from 'mongoose';

const connector=async()=> {
    try {
      const {connection}=  mongoose.connect(process.env.MONGODB_URI);
      if(connection.readyState==1){
        console.log('connected');
      }
    } catch (error) {
        return Promise.reject(error)
    }
}
export default connector