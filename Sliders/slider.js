let slids = document.getElementById("slids")

let sli = document.getElementsByClassName("sli")

 let sli_length = sli.length;



let count=0;

function next(){
    if(count < sli_length -1){
      count++;
    }
    else{
        count = 0
    }
    slids.style.transform = `translateX(-${count*800}px)`
   

}

function prev(){
    if(count > 0){
        count-- ;
    }
    else{
        count = sli_length - 1
    }

    slids.style.transform = `translateX(-${count*800}px)`
}

