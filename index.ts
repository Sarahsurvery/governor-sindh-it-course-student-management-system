class School {
    
        name: string;
        students: Students []=[];
        teachers: Teacher[]=[];
// constructor(name: string, students: Students, teachers: Teacher){
//     this.name = name
// }
        addStudent(stdObj:Students){
     this.students.push(stdObj)
        }
    addteacher(teObj:Teacher){
     this.teachers.push(teObj)
    }
        constructor (name:string){
    this.name = name;
     }
     }
class Students{
    
    name: string;
    rollnumber:number;
    schoolname: string;

    constructor(name: string, rollnumber:number, schoolname:string){
    
    // console.log(this);
        this.name=name;
        this.rollnumber=rollnumber;
        this.schoolname=schoolname;
        
    }
    }

class Teacher extends Students {}
//     constructor(name: string, rollnumber:number, schoolname:string)
//     {
//         super(name, rollnumber, schoolname);
//     }
 
// class Teacher extends new School{
//     constructor(name: string, rollnumber:number, schoolname:string)
//     {
//         super(name, rollnumber, schoolname);
//     }
// }
let S1 = new School ("NJV high");
let S2 = new School ("YMCA ground");
let S3 = new School("NASRA school");

let std1 = new Students("Sarah",24001,S1.name);
let std2 = new Students("Bilal",24001,S1.name);
let std3 = new Students("Faizan",24001,S1.name);

let t1 =new Teacher("sarah",20,S1.name);
let t2 =new Teacher("Hira",30,S1.name);
let t3 =new Teacher("Waniya",40,S1.name);

S1.addStudent(std1)
S2.addStudent(std2)
S3.addStudent(std3)

S1.addteacher(t1)
S2.addteacher(t2)
S3.addteacher(t3)

console.log(t1)
console.log(t2)
console.log(t3)

console.log(S1)
console.log(S2)
console.log(S3)





