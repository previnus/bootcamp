class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
console.log(killerRabbit)

killerRabbit.speak('hello')

let blackRabbit = new Rabbit("black");

blackRabbit.speak('hello there')





class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
  
    }
    // Getter
    get area() {
      return this.height * this.width;
    }
  
    // Setter
    set area(factor) {
      this.width = this.height*factor
    }
  }
  
  const square = new Rectangle(10, 10);
  square.area = 2

  console.log(square.area)


  class Body{
    constructor(part){
        this.part = part
    }
  }

  const ear = new Body('ear')
  console.log(ear)

  const nose = new Body('nose')
  console.log(nose)


  /* Class Extend */

  class Animal { 
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  // A constructor can use the super keyword to call the super class constructor.
  
  class Dog extends Animal {
    constructor(name,noise) {
      super(name); 
      this.noise = noise;
    }
  
    speak() {
      console.log(`${this.name} barks.It says ${this.noise}`);
    }
  }
  
  let d = new Dog('Mitzie', "Wouaf");
  console.log(d.name)
  d.speak();
  console.log(d)
