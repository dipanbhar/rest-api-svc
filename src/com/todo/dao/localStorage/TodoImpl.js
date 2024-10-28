import { LocalStorage } from "node-localstorage";
import { nanoid } from "nanoid";
import DOMPurify from 'isomorphic-dompurify';


const localStorage = new LocalStorage("./todos");

function getAllTodos() {
 const items = { ...localStorage };
 const list = [];
  for(let key in items){
    list.push(JSON.parse(items[key]));
  }
  //Sorting should be at this level only
  list.sort((a,b)=>{
    return b.priority-a.priority;
  });
  return JSON.parse(JSON.stringify(list));
}

function deleteAllTodos(item) {
  localStorage.removeItem(item);
}

function saveTodo(todoData) {
  const id = nanoid();
  todoData.id=id;
  // Senitize content to remove any XSS content
  todoData.title = DOMPurify.sanitize(todoData.title); 
  localStorage.setItem(id, JSON.stringify(todoData));
}

function updateTodo(todoData) {
  todoData.title = sanitize.value(todoData.title, 'string');
  localStorage.setItem(todoData.id, JSON.stringify(todoData));
}

function deleteTodo(id) {
  localStorage.removeItem(id);
}

const todo = {
  getAllTodos: getAllTodos,
  deleteAllTodos: deleteAllTodos,
  saveTodo: saveTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};

export default todo;
