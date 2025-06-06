import { Animal } from "./Animal";

export class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "perro");
  }

  public bark(): string {
    return `${this.name} dice: ¡Guau!`;
  }
}
