import Projects from "./Projects";
import Tasks from "./Task";
import Todo from "./Todo";



export default class UI{

    static log(){
        return ;
    }
    static initToDo(){
        //console.log(UI.log())
    }

    static addProject(projectName){
        console.log('adding project now')
        Todo.addToList(new Projects(projectName))
        console.log(Todo.getList())
    }
}