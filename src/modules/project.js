import ToDo from "./tasks";
import Storage from "./storage";


export default class Project{
    constructor(name, tasks){
        this.name=name;
        this.tasks=tasks;
    }


    addTask(task)
    {
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

    removeTaskAtIndex(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }
}


