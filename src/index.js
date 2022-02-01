import { ModuleGraph } from "webpack";
import Project from "./modules/Poject";
import Todo from "./modules/Todo";

const todo = new Todo();

const add = document.querySelector('.addProjectbtn');
const projectContainer = document.querySelector('.addProject')
const projects = document.querySelector('.projects')
const content = document.querySelector('.projectsContainer')
add.addEventListener('click', ()=>{
    while(projectContainer.firstChild){
        projectContainer.removeChild(projectContainer.lastChild)
    }
    createForm()
})

//Opens a form and initializes a new Project object once add button is clicked
function createForm(){
    const div = document.createElement('div')
    div.classList.add('projectInputBox')
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Project\'s Name:'
    div.appendChild(input)

    const btnDiv = document.createElement('div')
    btnDiv.classList.add('btndiv')

    const btn1 = document.createElement('button')
    btn1.innerText = 'add'
    btn1.setAttribute('id', 'yesbtn')
    btnDiv.appendChild(btn1)
    btn1.addEventListener('click', ()=>{
        if(input.value!==''){
            todo.addProject(new Project(input.value))
            console.log(todo.getProjects())
            projects.appendChild(createprojectbtn(input.value))
            resetbtn()
        }
        else{
            resetbtn()
        }
        
    })
    
    const btn2 = document.createElement('button')
    btn2.innerText = 'cancel'
    btn2.setAttribute('id', 'nobtn')
    btnDiv.appendChild(btn2)

    btn2.addEventListener('click', resetbtn)
    div.appendChild(btnDiv)

    projectContainer.appendChild(div)
}

//Gets rid of input box and replaces it with add project button
function resetbtn(){
    while(projectContainer.firstChild){
        projectContainer.removeChild(projectContainer.lastChild)
    }

    const btn = document.createElement('button')
    btn.classList.add('addProjectbtn')
    const span = document.createElement('span')
    span.setAttribute('id', 'plus');
    span.innerText = '+'
    btn.appendChild(span)
    const p = document.createElement('p')
    p.innerHTML = 'Add Project'
    btn.appendChild(p)
    //btn.innerText = `Add Project`
    btn.addEventListener('click',()=>{
            while(projectContainer.firstChild){
            projectContainer.removeChild(projectContainer.lastChild)
        }
        createForm()
    })
    projectContainer.appendChild(btn)

}


//Creates project button on sidebar based off of user input name
function createprojectbtn(name){
    const btn = document.createElement('button');
    btn.innerText = `${name}`;
    btn.setAttribute('id', 'projectButton');
    btn.addEventListener('click', openProject)
    return btn;
}


//Displays project on screen
function openProject(e){
    const projectTitle = document.querySelector('.projectTitle')
    const name = e.target.innerHTML;
    const project = todo.findProject(name);
    const tasks = project.getTasks()
    console.log(tasks)
    projectTitle.innerHTML = ''
    const title = document.createElement('h1');
    title.innerHTML=project.name;
    projectTitle.appendChild(title);
    const addtaskbtn = document.createElement('button');
    const span = document.createElement('span');
    span.setAttribute('id', 'plus');
    span.innerText = '+';
    addtaskbtn.appendChild(span);
    const add = document.createElement('p');
    add.innerHTML = 'Add Task';
    addtaskbtn.appendChild(add);
    addtaskbtn.addEventListener('click', openmodal)
    projectTitle.appendChild(addtaskbtn);
    if(project.tasks[0]==null) console.log('yuhhhhhhh');
    else project.tasks.forEach(task=>content.appendChild(createtaskbtn(task)));
}

//Creates a button for each task in the project's list
function createtaskbtn(task){
    const btn = document.createElement('button');
    btn.setAttribute('id', 'taskbtn');
    const radiobtn = document.createElement('input');
    radiobtn.setAttribute('type','radio');
    btn.appendChild(radiobtn);
    const taskname = document.createElement('div');
    taskname.innerHTML = task.name;
    btn.appendChild(taskname);
    const taskduedate = document.createElement('div');
    taskduedate.innerHTML = task.dueDate;
    btn.appendChild(taskduedate)
    const priority = document.createElement('div')
    priority.innerHtml = task.priority;
    btn.appendChild(priority);
    return btn;
}


function openmodal(){
    modal.classList.add('show')
}