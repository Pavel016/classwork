class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Имя ${this.name},возраст: ${this.age}`);
    }
}
class Work extends Person{
    company;
    constructor(name,age,company)
    {
    super(name,age);
    this.company = company;
    }
    Work()
    {
        console.log(`${this.name} работаеь ${this.company}`);
    }
}
let tom = new Work("Tom ",  19, "VTB");
tom.print();
tom.Work();