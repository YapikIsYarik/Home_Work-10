"use script"

class Student {
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
   }
   mark = [5, 4, 4, 5];
   bolean = false;
   get getInfo() {
      return `Студент ${this.course} курсу університету ${this.university},${this.fullName} `
   }
   get marks() {
      if (this.bolean) {
         return null
      } else
         return this.mark;
   }
   set marks(rating) {
      if (this.bolean) {
         null
      } else
         this.mark.push(rating)
   }
   getAverageMark() {
      return this.mark.reduce((acc, cur) => (acc + cur)) / this.mark.length;
   }
   dismiss() {
      this.bolean = true;
   }
   recover() {
      this.bolean = false;
   }
}

class BudgetStudent extends Student {
   constructor(university, course, fullName) {
      super(university, course, fullName)
      this.avarageMark = this.getAverageMark();
      this.bolean = this.bolean
      this.getScholarship = function getScholarship() {
         if (this.avarageMark >= 4 && !this.bolean) {
            return 'Ви отримали 1400 грн. стипендії';
         } else
            return 'Ви не отримали 1400 грн. стипендії';
      }
   }
}
const yaroslav = new BudgetStudent('LNU', 3, "Yaroslav Patsalon")
console.log(yaroslav.getInfo)
yaroslav.marks = 5
console.log(yaroslav.marks)
console.log(yaroslav.getAverageMark())
yaroslav.dismiss();
console.log(yaroslav.marks)
yaroslav.recover();
console.log(yaroslav.marks)
console.log(yaroslav.getScholarship())
yaroslav.dismiss();
console.log(yaroslav.getScholarship())