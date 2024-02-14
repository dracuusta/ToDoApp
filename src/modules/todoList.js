import Project from "./project";
import Tasks from "./tasks";


export default class TodoList{
    constructor(){
        this.projects=[];
        this.projects.push(new Project("default"));
    }

    addProject(name)
    {
       if(this.projects.find(o=>o.name===name)===undefined)
       {
            const newProject=new Project(name);
            this.projects.push(newProject);
       }
       else{
        console.log(`Project with the name ${name} already present`);
       }
    }

    getProject(name)
    {
        if(this.projects.find(o=>o.name===name)===undefined)
        {
            console.log("not project of such name");
        }
        else{
            const obj=this.projects.find(o=>o.name===name);
            return obj;
        }
    }

    removeProject(name)
    {
        const indexOfProject=this.projects.findIndex(i=>i.name===name);
        if(indexOfProject===-1)
        {
            console.log(`Project with name ${name} not present`);
        }
        this.projects.splice(indexOfProject,1);
    }

    viewProjects(){
        return this.projects;
    }


    viewTodosProjects(){
        let projectAccum={};
        this.projects.forEach((project)=>{
            const { title, dueDate } = project.tasks[0] && project.tasks[0].title && project.tasks[0].dueDate ? project.tasks[0] : { title: undefined, dueDate: undefined };
            projectAccum+={title,dueDate};
        });
        return projectAccum;
    }
}