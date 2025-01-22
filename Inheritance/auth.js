class auth{

    constructor(){
        this.username = "rajv"
        this.adminuser = "rajviii"
        this.email = "rajv@gmail.com"
        this.phone = 1237541
        this.marks = 99
        this.password = "99@rajv"
    }

    login(username, password){
        if(this.username == username && this.password == password){
            return this
        }
        else{
            return "Invalid user name"
        }
    }

}

class subauth extends auth{
    login(username , password) {
        if(this.username == username && this.password == password){
            return this.email + this.phone + this.marks
        }
        else{
            return "Invalid user name"
        }
    }
}



class subsubauth extends subauth{
    login(username , password) {
        if(this.username == username && this.password == password){
            return this.phone + this.marks
        }
        else{
            return "Invalid user name"
        }
    }
}




const user = new auth
const subuser = new subauth
const subsubuser = new subsubauth



let usenam = "rajv"
let pass = "99@rajv"


console.log(user.login(usenam, pass))
console.log(subuser.login(usenam,pass))
console.log(subsubuser.login(usenam,pass))