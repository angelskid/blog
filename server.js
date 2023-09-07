const express = require('express') 

// console.log(express) 
const articleRouter = require('./routes/articles')

const app = express()

const mongoose = require('mongoose')
const Article = require('./models/article')
mongoose.connect('mongodb://127.0.0.1/blog' , 
{useNewUrlParser : true , useUnifiedTopology: true}
)

app.set('my_name','adarsha')
const my_name = app.get('my_name')

console.log(my_name)

app.set('view engine', 'ejs')



app.use(express.urlencoded({extended :false}))

app.get('/' , async (req , res)=>{
    const articles = await Article.find().sort({ createdAt : 'desc'})
    res.render('articles/index', {articles}) 
})


app.use("/articles" , articleRouter)

app.listen(80)