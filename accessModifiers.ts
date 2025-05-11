// AccessModifiers  are of 3 types :- Public, Private and Protected
// Public - Accessible from anywhere
// Private - Accessible only within the class
// Protected - Accessible within the class and its subclasses

class Student {
  public firstName: string;
  private lastName: string;
  protected id: number;

  constructor(fName: string, lName: string, id?: number) {
    this.firstName = fName;
    this.lastName = lName;
    this.id = id || 0; // Default value if id is not provided
  }

    getLastName() {
        return this.lastName;
    }
    setLastName(lName: string) {
        this.lastName = lName;
    }
    setId(id: number) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}

let student1 = new Student("Shubham", "Gupta");
student1.firstName = "ShubhamG"; 
console.log(student1.firstName); // ShubhamG
console.log(student1.getLastName()); 
student1.setId(1);
console.log(student1.getId());

class Employee extends Student {
    constructor(tName: string, lName: string, id?: number) {
        super(tName, lName, id);
    }
}

let emp1 = new Employee("Shubham1", "Gupta1", 79);
console.log(emp1);
emp1.setId(29);
console.log(emp1.getId());

