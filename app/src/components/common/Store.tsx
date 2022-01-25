export function Store(){
    return{
        tasks: [] as any,
        edit: {} as any,
        addTask(title : string, description : string, assignee : string){
            const task = {
                id : `DOC-${this.tasks.length + 1}`,
                title,
                description,
                assignee,
                status : 'To Do'
            }
            this.tasks.push(task);
        },
        findTaskByTitle(title : string){
            const copy = this.tasks.slice()
            return copy.filter((item :any) => item.title == title)
        },
        editTask(task : any, newTask : any){
            console.log(newTask);
            
            this.tasks.splice(Number(task.id.split('-')[1]) - 1, 1, newTask)
            console.log(JSON.stringify(this.tasks));
        }
    }
}