interface data{
  name: string;
  dept: string;
  graduation(year:number):void;
}

class University implements data{
  name: string;
  dept: string;
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }
  graduation(year) {
    console.log(`Graduation ${this.dept} ${year} students`);
  }
}
var miu = new University("MIU", "MSD");
miu.graduation(2021);
