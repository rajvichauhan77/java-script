let data = [
    {
        id : 1,
        task : "Exercise"
        
    },
    {
        id : 2,
        task : "study"
        
    }
]


let tbody = document.querySelector("#tbody")


document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault()

    // let task1 = document.querySelector("#task").value


    
    // let num = Math.random()

    // let obj = {

    //     id: Math.round(num*1000),
    //     task : task1
    // }

    // data.push(obj)

    // showData(data)


    let id = document.querySelector("#id").value
    

    if(id){
        let updatedData = data.map((ele) => {
            if(ele.id == id){
                ele.task = document.querySelector("#task").value
            }
            return ele
        })

        showData(updatedData)
    }

    else{

        let num = Math.random()

        let obj = {

            id : Math.round(num*1000),
            task : document.querySelector("#task").value
        }
         data.push(obj)

         showData(data)
    }

        document.querySelector("#task").value = ""

        console.log(data)

})





function edit(id){

    data.map((ele) => {

        if(ele.id == id){
            document.querySelector("#task").value = ele.task
            
            document.querySelector("#id").value = ele.id
        }

    })

}



function del(id){

    let delData = data.filter((ele) => ele.id !=id)

    data = delData
    showData(delData)

}


function showData(delData){

    tbody.innerHTML =""

    delData.map((ele) => {

        tbody.innerHTML += `

          <tr>
                    
                    <td >${ele.task}</td>
                  
                     <td><button class="btn btn-warning " onclick="edit(${ele.id})">Edit</button></td>
    
                     <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
    
                </tr>
            

        `

    })

}


function showData(data){

    tbody.innerHTML = ""


    data.map((ele) => {

        tbody.innerHTML += `
    
                 <tr>
                    
                    
                    <td>${ele.task}</td>
                 
                     <td><button class="btn btn-warning " onclick="edit(${ele.id})">Edit</button></td>
    
                     <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
                     <td ><input type="checkbox"></td>
    
                </tr>
            
    
        `
    
    })
    
// console.log(data)

}




data.map((ele) => {

    tbody.innerHTML += `

             <tr>
               
                <td>${ele.task}</td>
              
                 <td><button class="btn btn-warning " onclick="edit(${ele.id})">Edit</button></td>

                 <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
                  <td ><input type="checkbox"></td>

            </tr>
        

    `

})