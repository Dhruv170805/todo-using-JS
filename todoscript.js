let Todo_List = []
let req = prompt("Request")



while(true)
    {
       if(req== "Add")
       {
        let add = prompt("Add the task:" )
        Todo_List.push(add)
        console.log(Todo_List)
        }
       

       if(req == "Display")
       {
        let display = Todo_List
        console.log(display)
        }
        

       if(req == "Delete")
       {
        let delete_task = prompt("Enter the task you want to delete")
        let index = Todo_List.indexOf(delete_task)
        if(index != -1)
            {
                Todo_List.splice(index,1)
                console.log(Todo_List)
                }
       }
       if(req=="Quit")
       {
        let quit = prompt("Are you sure you want to quit?")
        if(quit == "yes")
            {
                break
                }
                else (quit == "no")
                {
                    continue
                    }

       }
       req = prompt("Request")
    }
