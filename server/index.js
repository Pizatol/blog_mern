const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ArticleModel = require("./Models/model");

dotenv.config();

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log(`mongo is connected`);
    } catch (error) {
        console.error(`Error: ${error} `);
        process.exit(1);
    }
};

connectDB();

// FETCH ALL ARTICLES
app.get("/fetchArticles", async (req, res) => {
    ArticleModel.find({}, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

// FETCH 1 ARTICLE

app.put("/fetchOneArticle", async (req, res) => {
    const id = req.body.id;

    ArticleModel.findById(id, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

// ADD ARTICLE
app.post("/addArticle", async (req, res) => {
    const descriptionn = req.body.description;
    const title = req.body.title;
    const texte = req.body.text;
    const date = req.body.date;
    const author = req.body.author;

    const article = new ArticleModel({
        description: descriptionn,
        title: title,
        text: texte,
        date: date,
        author: author,
    });

    await article.save();
    res.send("Success");
});

app.listen(process.env.PORT);
