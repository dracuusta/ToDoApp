import Project from "./project";
import Tasks from "./tasks";
import TodoList from "./todoList";
import { format } from 'date-fns';


export default class UI{

    constructor(){
        this.todoList= new TodoList();
        this.currentProject="inbox";
        this.todoList.getProject("inbox").addTask(new Tasks("Finish Brushing","study",new Date("2022-03-25"),"urgent"));
        this.todoList.getProject("inbox").addTask(new Tasks("Get Grocceries","study",new Date("2019-03-25"),"urgent"));
        
        this.attachEventListeners = this.attachEventListeners.bind(this);
        this.toDoEventListener = this.toDoEventListener.bind(this);
    this.formEventListener = this.formEventListener.bind(this);
    this.renderProjects = this.renderProjects.bind(this);
    
    this.attachEventListeners();
    }
     
     attachEventListeners(){
        const openBtnDiv=document.querySelector('.open-btn');
        const formDiv=document.querySelector('form'); 
        this.renderProjects();


        openBtnDiv.addEventListener('click',this.toDoEventListener);
        formDiv.addEventListener('submit',this.formEventListener);

    }

        toDoEventListener(e){
            const modal=document.querySelector('[data-modal]');
            modal.showModal();
        }


    formEventListener(e){
        e.preventDefault();
        
        const title=document.getElementById('title').value;
        const description=document.getElementById('description').value;
        const priority=document.getElementById('priority').text;
        const dueDate=new Date(document.getElementById('dueDate').value);
        
        const task=new Tasks(title,description,dueDate,priority);
        
        this.todoList.getProject(this.currentProject).addTask(task);
        this.renderProjects();
        const modal=document.querySelector('[data-modal]');
        modal.close();
       

        
   };

   renderProjects(){
    const projectsDiv=document.querySelector('.project-todos-flexible');
    console.log(this.todoList);
    projectsDiv.innerHTML="";
   this.todoList.projects.forEach((project)=>{
       if(project.tasks){
        project.tasks.forEach((task, index) => {
            const title=task.title;
            const dueDate=format(task.dueDate,"dd-MMMM-yyyy");
            const cardDiv=document.createElement('div');
            cardDiv.setAttribute('class','card');
            const inputCheckBoxDiv=document.createElement('input');
            inputCheckBoxDiv.setAttribute('type','checkbox');
            inputCheckBoxDiv.setAttribute('class','rounded-checkbox');
            inputCheckBoxDiv.setAttribute('id','checkbox');
            const titleDiv=document.createElement('div');
            titleDiv.innerText=`${title}`;
            titleDiv.setAttribute('id','title-text');
            const dueDateDiv=document.createElement('div');
            dueDateDiv.innerText=`Due-Date: ${dueDate}`;
            cardDiv.append(inputCheckBoxDiv,titleDiv,dueDateDiv);
            projectsDiv.append(cardDiv);
          });
       }
    });
    

   }
    
}

