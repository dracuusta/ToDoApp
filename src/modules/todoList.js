import Project from "./project";
import Tasks from "./tasks";


export default class TodoList{
    constructor(projects){
        this.projects=projects;
    }


    addProject(name)
    {
       if(this.projects.find(o=>o.name===name))
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
            console.log()
            this.addProject(name);
        }
            const obj=this.projects.find(o=>o.name===name);
            return obj;
    }

    removeProjectTask(projectName, index) {
        const project = this.projects.find(i => i.name === projectName);
        if (project) {
            project.removeTaskAtIndex(index);
        } else {
            console.log(`Project with the name ${projectName} not found.`);
        }
    }

    viewProjects(){
        return this.projects;
    }

    hasProject(name){
        if(this.projects.find(o=>o.name===name)===undefined){
            return false;
        }
        else{
            return true;
        }
    }

}