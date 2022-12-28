const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
});

app.get('/read' , (req, res) => {
    res.send('read')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running`);
});

