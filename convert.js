//1. Create an article tag in your HTML with the `id` of "studentReport"

/*2. Create 3 objects that represents some of your teammates as NSS students
   - Name
   - Cohort
   - Current exercise being worked on */

   /* 3. Add a `toString()` method to your object that creates a
   string representation and returns it. Use the following
   format:
   "Name is in cohort and is working on the X exercise" */
   
   /* 4. Write a function that inputs a student object and returns the
   string representation */
   /* 5. Put all object into an array stored in the variable `students` */
   /* 6. Use the `map()` method to generate a new array that only contains
    the string representations of each student */
   const bryan = {
       toString() {
          return `${this.name} is in cohort ${this.cohort} and is working on the ${this.exercise}`
          
       },
       name: "Bryan Wilson",
       cohort: 34,
       exercise: "convert exercise"
       
    }
    const curtis = {
               toString() {
                  return `${this.name} is in cohort ${this.cohort} and is working on the ${this.exercise}`
                
               },
               name: "Curtis Crutchfield",
               cohort: 34,
               exercise: "convert exercise"
               
            }
            const matthew = {
                toString() {
                   return `${this.name} is in cohort ${this.cohort} and is working on the ${this.exercise}`
                   
                },
                name: "Matthew Ross",
                cohort: 34,
                exercise: "convert exercise"

   }

   const studentStringRepresentation = studentObject => studentObject.toString()
   
   const students = [bryan, curtis, matthew]


   const studentStringArray = students.map(studentStringRepresentation)
   /* Use the `forEach()` method to iterate the new array and render
   each string representation into the "studentReport" HTML element */

   studentStringArray.forEach(
       (studentString) => {
      document.querySelector("#studentReport")
      .innerHTML += `<p> ${studentString} </p>`
       }
)

   console.log(studentStringArray)
  
   console.log(bryan.toString())
   console.log(curtis.toString())
   console.log(matthew.toString())