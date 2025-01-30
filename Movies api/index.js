let stream_type = JSON.parse(localStorage.getItem("stream_type"))
let lang = JSON.parse(localStorage.getItem("lang"))

let b_url = `https://api.themoviedb.org/3/`

let key = `?api_key=617dfba34fac3c6681f2189d8b17203e` 


 
let d_endpoint = `discover/${stream_type ? stream_type : `movie`}`

let genre_endpoint = `genre/movie/list`

let end_lang = `&with_original_language=${lang.join("|")}`

let genre_url = b_url+genre_endpoint+key

let api_url = b_url+d_endpoint+key ;



let page = 1


function filter(){

    let filter_arr = []
    let filt = document.querySelectorAll(".lang")

    filt.forEach((ele) =>{
        if(ele.checked){
            filter_arr.push(ele.value)
        }
    })
    console.log(filter_arr)

    localStorage.setItem("lang", JSON.stringify(filter_arr))

    getMovies(api_url+`&with_original_language=${filter_arr.join("|")}`,page)
}



getMovies(api_url, page)

function getMovies(api_url,page){

    fetch(`${api_url}&page=${page}`)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
    console.log(data)
    showMovies(data.results)
    pages(data.page)
    
})

}       



 fetch(genre_url)
 .then((res) =>{
    return res.json()
 })
 .then((data) =>{
    showGenres(data.gen)
    
 })



 document.getElementById("btnradio1").addEventListener("click", function(e){
    console.log(e.target.value);

    let stream_url = b_url+`discover/`+e.target.value+key

    localStorage.setItem("stream_type", JSON.stringify(e.target.value))
    getMovies(stream_url, page);
})



 document.getElementById("btnradio2").addEventListener("click", function(e){
    console.log(e.target.value);

    let stream_url = b_url+`discover/`+e.target.value+key

    localStorage.setItem("stream_type", JSON.stringify(e.target.value))
    getMovies(stream_url, page);
})


 // localStorage.setItem("stream_type", JSON.stringify(st));

//     console.log(st);

//    let val = document.querySelectorAll("#btnradio");

//    val.forEach((ele) => {
//     console.log(ele.value)
//    })




function changePage(p){
    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=617dfba34fac3c6681f2189d8b17203e&page=${p}`)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        console.log(data)
        showMovies(data.results)
        pages(data.page)
    })
}




document.getElementById("search").addEventListener("change", function(e){
    let search = e.target.value;
    console.log(search)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=617dfba34fac3c6681f2189d8b17203e&query=${search}&page=1`)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        console.log(data)
        showMovies(data.results)
        pages(data.page)
    })
    })




function showMovies(data){
    document.getElementById("movies").innerHTML = ""
    data.map((ele) =>{
        document.getElementById("movies").innerHTML += `
    <div class="col col-lg-2 col-md-2 col-sm-4 col-1">   
    <div class="card h-100" >
        <img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${ele.original_title}</h5>
          <p class="card-text">${ele.release_date}</p>
          <a href="#" class="btn btn-primary">More</a>
        </div>
      </div>
      </div>
        `
    })
}



function pages(page){

    document.getElementById("pagination").innerHTML = `

    <ul class="pagination">
      <li class="page-item"><a class="page-link" onclick="changePage(${page-1})">Prev</a></li>
      <li class="page-item"><a class="page-link" >${page}</a></li>
      <li class="page-item"><a class="page-link" onclick="changePage(${page+1})">Next</a></li>
    </ul>

    `
}


function showGenres(gen){
    gen.map((ele) =>{
        document.getElementById("genre").innerHTML += `
             <div class="dropdown-item" ><input type="checkbox" value="${ele.id}" class="gen" /> ${ele.vote_average
             }</div>
        `
    })
    console.log(showGenres)
}

document.getElementById("genre").addEventListener("change", function(e){
    console.log(e.target.value)


    let g_url = b_url+`movie/`+e.target.value`/similar`+key

    console.log(g_url)

    getMovies(g_url, page)





    // fetch(`https://api.themoviedb.org/3/movie/${e.target.value}/similar?api_key=617dfba34fac3c6681f2189d8b17203e&page=1`)
    // .then((res) =>{
    //     return res.json()
    // })
    // .then((data) => {
    //     console.log(data)
    //     showMovies(data.results)
    //     pages(data.page)
    // })

    
})