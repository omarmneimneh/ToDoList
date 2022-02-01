export default class Task{
    constructor(name, desc, dueDate, priority){
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    setName(name){
        this.name = name;
    }
    
    getName(){
        return this.name;
    }

    setDesc(desc){
        this.desc = desc
    }

    getDesc(){
        return this.desc;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }
    
    getDueDate(){
        return this.dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }
    
    getPriority(){
        return this.priority;
    }
}
