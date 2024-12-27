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



    document.getElementById("search").addEventListener("keyup", function(e){

        let val = e.target.value.toUpperCase()

        let searchData = data.filter((ele) => !ele.list.toUpperCase().indexOf(val))

        showData(searchData)

    })


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
            task : document.querySelector("#task").value,
            status : false,
            time : Date()
        }
         data.push(obj)

        localStorage.setItem("data",JSON.stringify(data))
        showData(JSON.parse(localStorage.getItem("data")))

         showData(data)
    }

        document.querySelector("#task").value = ""

        console.log(data)

})



// if(!task1){
//     let toast =document.querySelector(".toast-container")
        
//     toast.innerHTML += `
//     <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
//         <div class="toast-header">
//         <img src="..." class="rounded me-2" alt="...">
//         <strong class="me-auto">Validation error</strong>
//         <small>11 mins ago</small>
//         <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//         </div>
//         <div class="toast-body">
//         please add the erro url
//         </div>
//     </div>
//     `

//     setTimeout(function(){
//         // document.querySelector(".not").style.display = "none"
//         // document.querySelector("#liveToast").className ="toast"
//         toast.innerHTML =""
//     },2000);
// }





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



 let checkData = JSON.parse(localStorage.getItem("data"))

    let statusData = checkData.map((ele) => {
        if(ele.id == id){
            ele.status = !ele.status;
        }
         return ele;
    })

    localStorage.setItem("data",JSON.stringify(statusData))
    
     showData(statusData);
    
     console.log(statusData)
    
    }


function showMore(id){

   let data= JSON.parse(localStorage.getItem("data"))

    let showDatadata = data.filter((ele) => ele.id == id)
    console.log(data)


    document.querySelector(".offcanvas").innerHTML = ""

     showDatadata.map((el) => {

            document.querySelector(".offcanvas").innerHTML = `
            
            <div class="offcanvas-header">
                 <h5 id="offcanvasRightLabel"> Know more </h5>
                 <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
             <div class="offcanvas-body">
                 
               <ul>
                <li>List : ${el.task}</li>
                <li>id : ${el.id}</li>
                <li>status : ${el.status}</li>
                
               </ul>
         
             </div>
         
            `
        })


}




function edit(id){

    data.map((ele) => {

        if(ele.id == id){
            document.querySelector("#task").value = ele.task
            
            document.querySelector("#id").value = ele.id
        }

        localStorage.setItem("data",JSON.stringify(data))
        showData(JSON.parse(localStorage.getItem("data")))

    })

}

function complete(){
    let subproduct = data.filter((ele) => ele.status == true)
    showData(subproduct)
}

function uncomplete(){
    let subproduct = data.filter((ele) => ele.status != true)
    showData(subproduct)
}

function del(id){

    let delData = data.filter((ele) => ele.id !=id)

    // data = delData
    // showData(delData)

    localStorage.setItem("data",JSON.stringify(delData))

    data = JSON.parse(localStorage.getItem("data"))

    showData(data)

}



// function showData(delData){

//     tbody.innerHTML =""

//     delData.map((ele) => {

//         tbody.innerHTML += `

//           <tr class="${ele.status ? "table-success" : "table-danger" }">
                    
//                     <td >${ele.task}</td>
                    
//                      <td><button class="btn primary rounded-pill" onclick="edit(${ele.id})">✏️</button></td>
    
//                      <td><button class="btn  rounded-pill" onclick="del(${ele.id})">🗑️</button></td>


//                       <td ><input type="checkbox" onclick="check"></td>

                    
//                          <td>

//                       <button onclick="shoeMore" class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  ⁝ </button>


//                       </td>

//                 </tr>
            

//         `

//     })

// }

    data = JSON.parse(localStorage.getItem("data")) || []

function showData(data){

    tbody.innerHTML = ""


    data.map((ele) => {

        tbody.innerHTML += `

        <tr class="${ele.status ? "table-success" : "table-danger" }">
                  
                  <td >${ele.task}</td>
                  
                   <td><button class="btn primary rounded-pill" onclick="edit(${ele.id})">✏️</button></td>
  
                   <td><button class="btn  rounded-pill" onclick="del(${ele.id})">🗑️</button></td>


                  <td ><input type="checkbox" ${ele.status ? "checked" : ""} onchange="check(${ele.id})"></td>

                  
                       <td>

                    <button onclick="showMore(${ele.id})" class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  ⁝ </button>


                    </td>

              </tr>
          

      `

    
    })
    
// console.log(data)

}




data = JSON.parse(localStorage.getItem("data")) || []

data.map((ele) => {

    tbody.innerHTML += `

    <tr class="${ele.status ? "table-success" : "table-danger" }">
              
              <td >${ele.task}</td>
              
               <td><button class="btn primary rounded-pill" onclick="edit(${ele.id})">✏️</button></td>

               <td><button class="btn  rounded-pill" onclick="del(${ele.id})">🗑️</button></td>


                <td ><input type="checkbox" ${ele.status ? "checked" : ""} onchange="check(${ele.id})"></td>

              
                   <td>

                <button onclick="showMore(${ele.id})" class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  ⁝ </button>


                </td>

          </tr>
      

  `

})