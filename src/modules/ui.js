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
        this.todoList.getProject("school").addTask(new Tasks("Get Grocceries","study",new Date("2019-03-25"),"urgent"));
        
        this.attachEventListeners = this.attachEventListeners.bind(this);
        this.toDoEventListener = this.toDoEventListener.bind(this);
        this.formEventListener = this.formEventListener.bind(this);
        this.renderProjectsTodos = this.renderProjectsTodos.bind(this);
        this.renderProjects = this.renderProjects.bind(this);
        this.switchProjectEventListener=this.switchProjectEventListener.bind(this);
        this.attachEventListeners();
    }
     
        attachEventListeners(){
        const openBtnDiv=document.querySelector('.open-btn');
        const formDiv=document.querySelector('form'); 


        this.renderProjectsTodos();
        this.renderProjects();
        const projectsDivs=document.querySelectorAll('.project-name');
        openBtnDiv.addEventListener('click',this.toDoEventListener);
        formDiv.addEventListener('submit',this.formEventListener);
        projectsDivs.forEach((projectsDiv)=>{projectsDiv.addEventListener('click',this.switchProjectEventListener)});
    }



        toDoEventListener(e){
            const modal=document.querySelector('[data-modal]');
            modal.showModal();
        }


    formEventListener(e){
        e.preventDefault();
        console.log('clicked');
        const title=document.getElementById('title').value;
        const description=document.getElementById('description').value;
        const priority=document.getElementById('priority').text;
        const dueDate=new Date(document.getElementById('dueDate').value);
        
        const task=new Tasks(title,description,dueDate,priority);
        
        this.todoList.getProject(this.currentProject).addTask(task);
        this.renderProjectsTodos();
        const modal=document.querySelector('[data-modal]');
        modal.close();
       

        
   };



   switchProjectEventListener(e){
   const newCurrProject=e.target.outerText;
   this.currentProject=newCurrProject;
   this.attachEventListeners();
   }

   renderProjectsTodos(){
    const projectsDiv=document.querySelector('.project-todos-flexible');
    projectsDiv.innerHTML="";
   this.todoList.projects.forEach((project)=>{
       if(project.tasks){
        project.tasks.forEach((task, index) => {
            if(this.currentProject===project.name){
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
       }});
       }
    });
   }



   renderProjects(){
    const projectsDiv=document.querySelector('.projects');
    projectsDiv.innerHTML="";
    this.todoList.projects.forEach((project)=>{
        const projectName=project.name;
        const projectNameDiv=document.createElement('div');
        projectNameDiv.innerHTML=``;
        if(projectName===this.currentProject)
        {
            projectNameDiv.classList.add('currentProject');
        }
        projectNameDiv.classList.add('project-name');
        projectNameDiv.classList.add(projectName);
        projectNameDiv.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg><span>${projectName}</span>`;
        projectsDiv.append(projectNameDiv);
    })
   }
    
}

