export default class Projects{
    constructor(name){
        this.name=name
        this.project = []
    }

    setName(name){
        this.name = name 
    }

    getName(){
        return this.name
    }

    setProject(project){
        this.project = project
    }

    getProject(){
        return this.project;
    }

    addTask(task){
        if (this.project.find((item) => item.getName() === task.name)) return
        this.project.push(task)
    }

    deleteTask(task){
        return this.project = this.project.filter(item =>{
            item !== task;
        })
    }

    
}