const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const mongoose = require("mongoose");
const UserModel = require("./models/user");
const exphbs = require('express-handlebars');
// const Router = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Configuração do Handlebars
// app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// app.set("view engine", "ejs");



async function main(){
  // await mongoose.connect('mongodb://localhost:27017/laudosweb')
  await mongoose.connect('mongodb://127.0.0.1/laudosweb')
  console.log('conectado ao bando de dados Mongodb');
}
main().catch((err) => console.log(err));

// mongoose.connect('mongodb://localhost:27017/laudosweb',
// {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

// const username = "";
// const password = "";
// const dbname = "laudosweb";

// CORS
// app.use(cors({credentials:true,origin:'http://localhost:8000/message'})) // essa linha dá erro ao conectar o backend com o frontend

app.post('/cadastrar', async(req,res)=>{

  // console.log(req.body.usuarioNome);
  // console.log(req.body.usuarioEmail);
  // console.log(req.body.usuarioSenha);
  const UsuarioNome = req.body.usuarioNome;
  const UsuarioEmail = req.body.usuarioEmail;
  const UsuarioSenha = req.body.usuarioSenha;

  const formData = new UserModel({
    nome: UsuarioNome,
    email: UsuarioEmail,
    senha: UsuarioSenha
  })
  try {
    await formData.save();
    res.send("inserted data..")
} catch(err) {
    console.log(err)
}

});


app.get("/message", (req, res) => {
  res.json({ message: "Servidor online!" });
});

app.post("/cadastrar", (req,res)=>{
  const SaveUser = new UserModel(req.body)
  SaveUser.save((error,savedUser)=>{
    if(error) throw error
    res.json(savedUser)
  })
})

app.listen(8000, () => {
  console.log(`Servidor na porta 8000.`);
});