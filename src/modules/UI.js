import Projects from "./Projects";
import Task from "./Task";
import Todo from "./Todo";

//const projects = document.querySelector('.projects')
const addProjects = document.querySelector('.addProjectbtn')
const tasks = document.querySelector('.tasks')

export default class UI{

    //handles project button creation
    renderProjects(){
        const projects = document.querySelector('.projects')
        const list = Todo.getList()
        list.forEach(project=>projects.appendChild(createProjectButton(project)))
    }

    createProjectButton(project){
        const button = document.createElement('button')
        button.setAttribute('id', 'projectButton')
        button.innerHTML = `${project.name}`
        button.addEventListener('click', openProject(project))
        return button;
    }
}