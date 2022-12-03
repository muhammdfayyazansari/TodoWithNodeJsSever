// console.log("fayyaz ansari")

const addItem =()=>{
  let todoItem = document.getElementById("todoItem");
  console.log(todoItem.value)
  axios.post("http://localhost:5001/todo", {text : todoItem.value})
  .then(response =>{
    document.getElementById("result").innerHTML = "";
    response.data.todos.map((item,index)=>{
      document.getElementById("result").innerHTML += index+") "+item +"<br />"
      // console.log(index)
    })
    console.log("ponseponse>>>>", response.data.todos)
  })
  .catch(error =>{
    console.log(error)
  }) 
  
  todoItem.value = "";
  
}


const getTodos = abc =>{
  axios.get("http://localhost:5001/todos")
  .then(response=>{
    document.getElementById("result").innerHTML = "";
    response.data.todos.map((item,index)=>{
      document.getElementById("result").innerHTML += index+") "+item +"<br />"
    })
  })
  .catch(error =>{
    console.log(error)
  }) 
}
getTodos();


setInterval(() => {
  getTodos()
}, 5000);











