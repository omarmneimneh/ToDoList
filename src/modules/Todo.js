import Project from "./Poject";
import Task from "./Task";

export default class Todo{
    constructor(){
        this.list = []
    }

    //Todo
    // 1. add projects to list
    // 2. return all projects from list
    // 3. delete projects from list
    // 4. find specific project
    addProject(project){
        if(!this.list.find(item=>item.name===project.name)) this.list.push(project)
        else console.log('this project exists')
    }

    getProjects(){
        return this.list;
    }

    deleteProject(project){
        return this.list = this.list.filter(item=>item.name!== project.name)
    }

    findProject(project){
        return this.list.find(obj => obj.name === project)
    }
}