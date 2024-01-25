import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);


    if( !process.env.MONGODB_url ) return console.log('MONGODB_URL not found');

    if(isConnected) return console.log('Connected to DB');
    
    try{
        const mongodbUrl = process.env.MONGODB_URL as string;
        await mongoose.connect(mongodbUrl);

        isConnected =  true;
    } catch(error){
        console.log(error);
    }
}