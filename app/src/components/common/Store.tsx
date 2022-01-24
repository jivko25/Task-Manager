export function Store(){
    return{
        tasks: [] as any,
        addTask(title : string, description : string, assignee : string){
            const task = {
                id : `DOC-${this.tasks.length + 1}`,
                title,
                description,
                assignee,
                status : 'To Do'
            }
            console.log('test');
            
            this.tasks.push(task);
        }
    }
}