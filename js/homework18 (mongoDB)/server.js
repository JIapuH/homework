const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000
//const bodyParser = require('body-parser')

//база данных chat
mongoose.connect('mongodb://localhost/chat', {
    useNewUrlParser: true
});

var db = mongoose.connection;

//схема - это структура документа коллекции. В сообщениях должны быть только nick и message / Описываем колонки таблицы
var userSchema = new mongoose.Schema({
    login: String,
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

var messageSchema = new mongoose.Schema({
    message: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

//создается КЛАСС по этой схеме
var Message = mongoose.model('Message', messageSchema);
var User = mongoose.model('User', userSchema);

db.on('error', console.error.bind(console, 'connection error:'));

//чтобы получать разобранный JSON в req.body
app.use(express.json())

//по REST: get отдает всё (или с лимитом)
app.get('/message', async (req, res) => res.send(await Message.find().populate('author')))
//по id отдает 1 запись
app.get('/message/:id', async (req, res) =>
    res.send(
        await Message.findOne({
            _id: mongoose.Types.ObjectId(req.params.id)
        }) ////используем findOne для поиска записи по id
    ))

//post - новая сущность (сообщение в этом примере)
app.post('/message', async (req, res) => {
    let newMessage = new Message(req.body) //создание сообщения с полями nick и message. Можно и newMessage.nick = req.body.nick
    await newMessage.save() //сохранение
    if (newMessage.author) {
        const author = await User.findOne({
            _id: mongoose.Types.ObjectId(newMessage.author)
        })
        author.messages.push(newMessage._id)
        await author.save()
    }
    res.status(201).send(newMessage) //201 - Entity Created Code. Возвращаем запись из бд с _id
})

app.post('/user', async (req, res) => {
    let newUser = new User(req.body) //создание сообщения с полями nick и message. Можно и newMessage.nick = req.body.nick
    await newUser.save() //сохранение
    res.status(201).send(newUser) //201 - Entity Created Code. Возвращаем запись из бд с _id
})

app.patch('/message/:id', async (req, res) => {
    let msg = await Message.findOne({
        _id: mongoose.Types.ObjectId(req.params.id)
    }) ////используем findOne для поиска записи по id
    let patch = req.body
    Object.assign(msg, patch)
    //msg = {...msg, ...patch}
    await msg.save()
    res.status(200).send(msg) //200 - Entity Created Code. Возвращаем запись из бд с _id
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// // fetch to POST

// fetch('./', {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify({nick: 'fetch', message: 'fetch message'})
// })

// await fetch('', {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify({nick: 'fetch', message: 'fetch message 2'})
// })

// // fetch for change

// fetch('http://localhost:3000/message/602775036fa0e310073d8492', {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     method: "PATCH",
//     body: JSON.stringify({nick: 'Change'})
// })