fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        showData(data)
    })



function showData(data){
    console.log(data)

    data.map((ele) => {
        document.getElementById("main").innerHTML += products(ele)
    })
}

function products(ele){
    
    return (`
             <div class=" col  ">
                        <div class="card  h-100" >
                            <img src="${ele.image}" class="h-75  p-3 card-img-top" alt="...">
                            <div class="card-body ">
                            <h5 class="card-title">${ele.title
                            }</h5>
                            <p class="card-text">${ele.price
                            }</p>
                            <a href="#" class="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
        `)
}