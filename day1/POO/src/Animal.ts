export class Animal {
    constructor(
      public name: string,
      private age: number,
      private species: string
    ) {}
  
    public getInfo(): string {
      return `${this.name} es un ${this.species} de ${this.age} años.`;
    }
  }
  