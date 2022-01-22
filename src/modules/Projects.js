export default class Projects{
    constructor(name){
        this.name=name
        this.tasks = []
    }

    setName(name){
        this.name = name 
    }

    getName(){
        return this.name
    }

    setTasks(tasks){
        this.tasks = tasks
    }

    getTasks(){
        return this.tasks;
    }

    addTask(task){
        if (this.tasks.find((item) => item.getName() === task.name)) return
        this.tasks.push(task)
    }

    deleteTask(task){
        return this.tasks = this.tasks.filter(item =>{
            item !== task;
        })
    }
}