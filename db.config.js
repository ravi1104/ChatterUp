import mongoose from 'mongoose';

const uri="mongodb+srv://ravi:<password>@atlascluster.tlcgbgf.mongodb.net/ChatterUp?retryWrites=true&w=majority";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri, {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}
