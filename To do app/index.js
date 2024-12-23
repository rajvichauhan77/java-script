let data = [
    // {
    //     id : 1,
    //     task : "Exercise"
        
    // },
    // {
    //     id : 2,
    //     task : "study"
        
    // }
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




// function check(id){

//         data.map((ele) => {
//             if(ele.id != id){
//                 alert("You have some work to do")
//             }
//             else{
//                 // alert("You have to take rest now")
//             }
//         })
//         console.log(data)
//         showData(checkData)

// }




function check(id){
    let statusData = data.map((ele) => {
        if(ele.id == id){
            ele.status = !ele.status;
        }
         return ele;
    })
    
     showData(statusData);
    
     
    
    }


function shoeMore(id){
    let data = data.filter((ele) => ele.id == id)
    console.log(data)

    showData(shoeMore)
}


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

          <tr class="${ele.status ? "table-success" : "table-danger" }">
                    
                    <td >${ele.task}</td>
                    
                     <td><button class="btn btn-warning rounded-pill" onclick="edit(${ele.id})">Edit</button></td>
    
                     <td><button class="btn btn-danger rounded-pill" onclick="del(${ele.id})">Delete</button></td>


                      <td ><input type="checkbox" onclick="check"></td>


                       <td>

                      <button onclick="shoeMore" class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  ⁝ </button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            ...
                        </div>
                        </div>


                      </td>

                </tr>
            

        `

    })

}


function showData(data){

    tbody.innerHTML = ""


    data.map((ele) => {

        tbody.innerHTML += `
    
                 <tr class="${ele.status ? "table-success" : "table-danger" }">
                    
                    
                    <td class="h2">${ele.task}</td>

                     <td><button class="btn btn-warning rounded-pill" onclick="edit(${ele.id})">Edit</button></td>
    
                     <td><button class="btn btn-danger rounded-pill" onclick="del(${ele.id})">Delete</button></td>

                     <td ><input id="stat" onchange="check(${ele.id})" value="true" type="checkbox" ${ele.status ? "checked" : ""} class="status1"  /> </td>

                      <td>

                      <button onclick="shoeMore" class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  ⁝ </button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasRightLabel"> Know more </h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            ...
                        </div>
                        </div>


                      </td>

    
                </tr>
        
        `
    
    })
    
// console.log(data)

}




data.map((ele) => {

    tbody.innerHTML += `

             <tr>
               
                <td class="h2>${ele.task}</td>
              
                 <td><button class="btn btn-warning " onclick="edit(${ele.id})">Edit</button></td>

                 <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>

                    <td ><input id="stat" onchange="check(${ele.id})" value="true" type="checkbox" ${ele.status ? "checked" : ""} class="status1"  /> </td>

            </tr>
        

    `

})