let data = [
    {
        id : 1,
        pic :" https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/third-person-wiki_ver_1.png" ,
        name : "jhone doe",
        age : 25,
        email : "jhon@gmail.com"
    },

    {
        id : 2,
        pic :" https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/third-person-wiki_ver_1.png" ,
        name : "jhoneyy doe",
        age : 24,
        email : "jhon@gmail.com"
    }

]

document.querySelector("#form").addEventListener("sunmit", function(e){
    e.preventDefault()

    let pic1 = document.querySelector("#img").value
    let name1 = document.querySelector("#name").value
    let email1 = document.querySelector("#email").value
    let age1 = document.querySelector("#age").value

    let obj = {

        pic : pic1,
        name : name1,
        email : email1,
        age : age1

    }

    data.push(obj)

    showData(data)

    document.querySelector("#img").value =""
    document.querySelector("#name").value =""
    document.querySelector("#email").value =""
    document.querySelector("#age").value =""


})


let tbody = document.querySelector("#tbody")
     
    data.map((ele) =>{

        tbody.innerHTML =+ `
            <tr>
                <td><img src="${ele.pic}"> </td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.age}</td>
                 <td><button class="btn btn-waring" onclick="edit(${ele.id})">Edit</button></td>
                 <td><button class="btn btn-waring" onclick="del(${ele.id})">Delete</button></td>
            </tr>
        

        `

    })