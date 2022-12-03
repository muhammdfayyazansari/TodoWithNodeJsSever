import express from 'express';
import cors from 'cors';
const app = express();
const port = 5001;


let todos = [];
app.use(express.json());
app.use(cors());

app.post('/todo', (req, res)=>{
let todo = req.body.text;
todos.push(todo)
console.log("some one is sending todo")
res.send({
  message : "Your Todo is saved",
  todos : todos,
})
})

app.get('/todos',(req,res)=>{
console.log("some one is asking for todos");
res.send(
  {
    message : "Here is your todos",
    todos : todos
  }
)
})

app.listen(port, ()=>{
  console.log(`Todos app listening at port No ${port}`)
})