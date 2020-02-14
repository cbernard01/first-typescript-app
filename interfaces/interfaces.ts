interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic: Vehicle & Reportable  = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken: ${this.broken}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}\nCarbonated: ${this.carbonated}\nSugar: ${this.sugar}`
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
