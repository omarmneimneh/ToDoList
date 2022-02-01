export default class Project{
    constructor(name){
        this.name = name;
        this.tasks = []
    }

    //Todo
    //1. return name
    //2. set name
    //3. view tasks
    //4. add tasks
    //5. delete tasks
    //6. get specific task

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }

    getTasks(){
        return this.tasks;
    }

    addTask(task){
        if(!this.tasks.find(item =>item.name === task.name)) this.tasks.push(task);
    }

    deleteTask(task){
        this.tasks = this.tasks.filter(item=>item.name!==task.name)
    }

    getTask(task){
        return this.tasks.find(obj=>obj.name === task.name)
    }
}

