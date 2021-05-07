const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);



class Database {
   
   constructor() {
     this.connect()
   }


    connect() {
      mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("database connection successful")
      }).catch((err) => {
        console.log("database connection error " + err)
      }) 
    }
};


module.exports = new Database();