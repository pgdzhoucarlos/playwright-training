import { Animal } from "./Animal";

export class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "gato");
  }

  public meow(): string {
    return `${this.name} dice: ¡Miau!`;
  }
}
