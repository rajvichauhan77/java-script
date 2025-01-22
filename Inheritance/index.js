class Big{

    constructor(){
        this.name = "abc"
        this.email = "abc@gmail.com"
        this.address = "bhavnagar"
        this.marks = 20
    }

    square(){
        return this.marks*this.marks
    }

    setmail(m){
        this.email = m
    }

    mail(){
        return this.email
    }
}

const obj = new Big()
console.log(obj.name )


class small extends Big{

}

const obj2 = new small()
console.log(obj2.square())


obj.setmail("rajv@gmail.com")

console.log(obj.mail())