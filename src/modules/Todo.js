import Projects from "./Projects"

export default class Todo{
    constructor(list){
        this.list = []
    }

    setList(list){
        this.list= list
    }

    getList(){
        return this.list
    }

    addToList(project){
        return this.list=this.list.push(project)
    }

    removeFromList(project){
        return this.list = this.list.filter(item =>{
            item !== project;
        })
    }

}