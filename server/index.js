const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { ArticleModel, CommentaryModel } = require("./Models/model");

dotenv.config();

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });

        console.log(`mongo is running`);
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
    const description = req.body.description;
    const title = req.body.title;
    const texte = req.body.text;
    const date = req.body.date;
    const author = req.body.author;
    const image = req.body.image;
    const commentaryID = req.body.commentaryID;

    const article = new ArticleModel({
        description: description,
        title: title,
        text: texte,
        date: date,
        author: author,
        image: image,
        commentaryID: commentaryID,
    });

    await article.save();
    res.send("Success");
});

// ADD COMMENTARY
app.post("/NewCommentary", async (req, res) => {
    const time = req.body.time;
    const comID = req.body.comID;
    const commentaryText = req.body.commentary;
    const pseudo = req.body.pseudo;
    const articleID = req.body.articleID;
    const commentaryIndex = req.body.commentaryIndex

    const commentaire = new CommentaryModel({
        time: time,
        comID: comID,
        commentaryText: commentaryText,
        pseudo: pseudo,
        articleID: articleID,
        commentaryIndex : commentaryIndex
    });
   
    await commentaire.save();
    res.send("Success");
});

// FETCH COMMENTARIES
app.put("/fetchCommentaries", async (req, res) => {
    CommentaryModel.find({}, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await ArticleModel.findByIdAndRemove(id).exec();
    res.send("item deleted");
});

app.listen(process.env.PORT);
