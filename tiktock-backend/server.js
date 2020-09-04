import express from 'express'
import mongoose from 'mongoose'
import Data from './data.js';
import Video from './dbModel.js'

// app config
const app = express();
const port = process.env.PORT ||9000;

//Middleware
app.use(express.json());
app.use((req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})
//Db config 
const connection_url = 'mongodb+srv://admin:Pa11mRdGUn3CsH7S@cluster0.lfbhu.mongodb.net/ticktock?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//api endpoints
app.get("/", (req, res) => res.status(200).send('hello world'));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));


app.get("/v2/posts", (req, res) => {
    Video.find((err, data) => {
        if (err) {
            res.status(500).res(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post("/v2/posts", (req, res) => {
    //Post request add data to database 
    //It will let us Acc a video comment to the video collection 
    const dbVideos = req.body
    Video.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).res(err)
        } else {
            res.status(201).send(data)
        }
    })


})
// listing
app.listen(port, () => console.log(`Listting on localhost: ${port}`));

