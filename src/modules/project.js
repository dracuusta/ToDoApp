import ToDo from "./tasks";


export default class Project{
    constructor(name){
        this.name=name;
        this.tasks=[];
    }


    addTask(task)
    {
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

    removeTask(name){
        const indexOfTask=this.tasks.findIndex(i=>i.name===name);
        this.tasks.splice(indexOfTask,1);
    }
}


