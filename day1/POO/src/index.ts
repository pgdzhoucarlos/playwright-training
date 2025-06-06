import { Dog } from "./Dog";
import { Cat } from "./Cat";
import { Shelter } from "./Shelter";

const shelter = new Shelter();

const dog = new Dog("Max", 3);
const cat = new Cat("Luna", 2);

shelter.addAnimal(dog);
shelter.addAnimal(cat);

shelter.listAnimals();

console.log(dog.bark());
console.log(cat.meow());
