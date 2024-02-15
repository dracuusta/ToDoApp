export default class Storage{

    static getProjectTodos(){
        return JSON.parse(localStorage.getItem('todo'));
    }
    static addProjectTodos(todoList){
        const todoList_deserialized=JSON.stringify(todoList);
        localStorage.setItem('todo',todoList_deserialized);
    }
}