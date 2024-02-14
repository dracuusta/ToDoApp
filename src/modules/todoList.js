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
            this.addProject(name);
        }
            const obj=this.projects.find(o=>o.name===name);
            return obj;
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

}