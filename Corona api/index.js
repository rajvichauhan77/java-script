let covid = document.getElementById("covid")

let b_url = `https://api.rootnet.in/covid19-in/stats/latest`



document.getElementById("search").addEventListener("change", function(e){

    let search = e.target.value
    console.log(search)

    fetch(b_url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        Showcases(data)
    })
    

    console.log(e.target.value)

 })




getcases(b_url)

function getcases(b_url){
    fetch(b_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data.regional)
        Showcases(data.data.regional)
    })
}


function Showcases(d){

    covid.innerHTML = ""
    d.map((ele) => {
        covid.innerHTML += `
              <thead>
                <tr>
                    <td class=" col-4  p-2 border">Location📍</td>
                    <td class="   p-2 border">Dethe</td>
                    <td class="  p-2 border">Discharged</td>
                    <td class="  p-2 border">totalConfirmed</td>
                </tr>
            </thead>
         <tbody>
               <tr class="border ">
                <td class=" col-4  p-2 border">
                    <b> ${ele.loc}</b>
                </td>
                <td class=" p-2 border">
                    <b>${ele.deaths}</b>
                </td>
                <td class=" p-2 border">
                    <b> ${ele.discharged}</b>
                </td>
                <td class=" p-2">
                    <b>${ele.totalConfirmed}</b>
                </td>
            </tr>
        </tbody>
        `
    })
 
} 

