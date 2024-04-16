let  showStudent = (Student) =>{
    //действия 
    console.log(`Имя: ${Student.name}`);
    console.log(`Возраст: ${Student.age}`);
    console.log(`E-mal: ${Student.email}`);
    console.log(`Grup: ${Student.grup}`)
    for(  cont in Student.cont ) {
        console.log(Student.cont[cont]);
    }
}
const Grok = {name: "Grok ", age: 19, email: "t36dgsd@gmail.com",grup:"2341434" ,
cont:{
    phone:"+5352542143",
    addres:"moscow", 
}
};
showStudent(Grok);