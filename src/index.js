import UI from "./modules/UI";

window.addEventListener('load', UI.initToDo())

const add = document.querySelector('.addProjectbtn');
const projectContainer = document.querySelector('.addProject')
add.addEventListener('click', ()=>{
    while(projectContainer.firstChild){
        projectContainer.removeChild(projectContainer.lastChild)
    }
    createForm()
})

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
            //UI.addProject(input.value)
            whatever(input.value)
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

function resetbtn(){
    while(projectContainer.firstChild){
        projectContainer.removeChild(projectContainer.lastChild)
    }

    const btn = document.createElement('button')
    btn.classList.add('addProjectbtn')
    const span = document.createElement('span')
    span.id = 'plus'
    span.innerText = '+'
    span.style.fontWeight = '600'
    btn.appendChild(span)
    btn.innerHTML =`${span.innerText} Add Project`
    btn.addEventListener('click',()=>{
            while(projectContainer.firstChild){
            projectContainer.removeChild(projectContainer.lastChild)
        }
        createForm()
    })
    projectContainer.appendChild(btn)

}

function whatever(projectName){
    console.log(projectName)
    UI.addProject(projectName)
}