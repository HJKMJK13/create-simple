const inputVal=document.getElementsByClassName("inputVal")[0]
const addTaskBtn=document.getElementsByClassName("btn")[0]

addTaskBtn.addEventListener("click",()=>{
    let localItems=JSON.parse(localStorage.getItem('localItem'))
    if(localItems===null){
        taskList=[]
    }
    else{
        taskList=localItems
    }

    taskList.push(inputVal.value)
    localStorage.setItem("localItem",JSON.stringify(taskList))
})


