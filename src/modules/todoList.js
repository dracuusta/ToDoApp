import Project from "./project";
import Tasks from "./tasks";


export default class TodoList{
    constructor(projects){
        this.projects=projects;
    }


    addProject(name)
    {
       if(this.projects.find(o=>o.name===name)===undefined)
       {
            const newProject=new Project(name,[]);
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

    removeProjectTask(projectName,taskName) {
        const projectIndex=this.projects.findIndex(element=>element.name===projectName);
        if(projectIndex === -1) {
            console.error('Project not found');
            return; // Exit the function if project not found
        }
        const taskIndex = this.projects[projectIndex].tasks.findIndex(element => element.title === taskName);

        this.projects[projectIndex].tasks.splice(taskIndex,1);
        console.log(this.projects[projectIndex]);
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