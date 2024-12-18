let data = [
    {
        id : 1,
        pic :"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg ",
        name : "jhone doe",
        age : 25,
        email : "jhon@gmail.com"
    },

    {
        id : 2,
        pic :" https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" ,
        name : "jhoneyy doe",
        age : 24,
        email : "jhon@gmail.com"
    }

]



function del(id){
    
    let delData = data.filter((ele) => ele.id !=id)


    data = delData
    showData(delData)
}



document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault()

    let id = document.querySelector("#id").value

    if(id){

            let updatedData = data.map((ele) => {
            if(ele.id == id){
                ele.pic = document.querySelector("#img").value
                ele.name = document.querySelector("#name").value
                ele.email = document.querySelector("#email").value
                ele.age = document.querySelector("#age").value
    
            }
            return ele
        })
        showData(updatedData)
    }

    else{
            let num = Math.random()

            let obj = {

                id : Math.round(num*1000),
                pic : document.querySelector("#img").value,
                name : document.querySelector("#name").value,
                email : document.querySelector("#email").value,
                age : document.querySelector("#age").value,

            }

            data.push(obj)

            showData(data)
    }

            document.querySelector("#img").value =""
            document.querySelector("#name").value =""
            document.querySelector("#email").value =""
            document.querySelector("#age").value =""

            // console.log(Math.round(num*1000))

            console.log(data)

})




function edit(id){

    data.map((ele) => {
        if(ele.id == id){
            document.querySelector("#img").value = ele.pic
            document.querySelector("#name").value = ele.name
            document.querySelector("#email").value = ele.email
            document.querySelector("#age").value = ele.age
            document.querySelector("#id").value = ele.id
        }
    })
}



function showData(delData){

    tbody.innerHTML = ""
    delData.map((ele) =>{

        tbody.innerHTML += `
            <tr>
                <td><img width="70px"   src="${ele.pic}"> </td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.age}</td>
                 <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
                 <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
            </tr>
        

        `

    }

)}




let tbody = document.querySelector("#tbody")
     
    data.map((ele) =>{

        tbody.innerHTML += `
            <tr>
                <td><img width="70px"   src="${ele.pic}"> </td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.age}</td>
                 <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
                 <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
            </tr>
        

        `

    })