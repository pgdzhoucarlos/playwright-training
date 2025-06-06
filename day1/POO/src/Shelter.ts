import { Animal } from "./Animal";

export class Shelter {
  private animals: Animal[] = [];

  public addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  public listAnimals(): void {
    console.log("Animales en el refugio:");
    this.animals.forEach((a, index) => {
      console.log(`${index + 1}. ${a.getInfo()}`);
    });
  }
}
