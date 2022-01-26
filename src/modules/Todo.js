import Projects from "./Projects"

export default class Todo{
    constructor(){
        this.list=[]
    }

    static setList(list){
        this.list= list
    }

    static getList(){
        return this.list
    }

    static addToList(project){
        console.log(project)
        this.list = this.list.push(project.name)
    }

    static removeFromList(project){
        return this.list = this.list.filter(item =>{
            item !== project;
        })
    }

    static log(){
        console.log('Im in todo.js')
    }
}