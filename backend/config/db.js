const mongoose = require('mongoose');

const connectDB = async () => {
	try{
		const connected = await mongoose.connect(MONGO_URI);
		
		console.log(`DB Connected: ${connected.connection.host}`)
	}catch(error){
		console.log(error);
		process.exit(1)
	}
}

module.exports = connectDB