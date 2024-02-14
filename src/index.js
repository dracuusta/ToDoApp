import './styles.css';
import Project from './modules/project';
import Tasks from './modules/tasks';
import TodoList from './modules/todoList';


const todoList= new TodoList();
todoList.addProject("school");
const task=new Tasks("Finish Lab", "High time you finish the labwork",new Date("2023-02-25"),"High");
todoList.getProject("school").addTask(task);
todoList.viewTodosProjects();
