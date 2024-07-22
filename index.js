class Cat{
    constructor(name, sex){
        this.name = name;
      this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`;
    }
  }
  
  class Dog{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`;
    }
}

class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    
    speak(){
        if(this.sex.toLowerCase() === 'male'){
            return `It's me! ${this.name}, the parrot!`;
        }else{
            return `${this.name} says squawk!`;
        }
    }
}

//example usage:
var myCat = new Cat('Whiskers', 'female');
console.log(myCat.speak());

var myDog = new Dog('Rex', 'male');
console.log(myDog.speak());

var myMaleBird = new Bird('Polly', 'male');
console.log(myMaleBird.speak());
  
var myFemaleBird = new Bird('Tweety', 'female');
console.log(myFemaleBird.speak());
  