import mongoose from 'mongoose';

const titockSchema = mongoose.Schema({
    url: String, 
    name: String, 
    description: String, 
    songname: String, 
    likes: String, 
    messages: String,
    shares: String,

})
// Collection inside the database
export default mongoose.model('titktokVideos', titockSchema)

