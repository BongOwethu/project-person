/* Create a class called Person.
Your Person class should have the following attributes:
- name
- age
- gender
- interests. This is a list or array of strings.
Give your Person class a hello function.
*/

// Define class
class Person {
    // Constructor to initialize the attributes stated above
    constructor(name, age, gender, interests) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    // Method to display a greeting which is hello
    hello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am interested in ${this.interests.join(', ')}.`);
    }
  }
  
  // Example usage:
  const person1 = new Person('John', 25, 'Male', ['Reading', 'Painting', 'Traveling']);
  person1.hello();
  
  const person2 = new Person('Mandisa', 32, 'Female', ['Programming', 'Cooking', 'Hiking']);
  person2.hello();
  
module.exports = { Person };
