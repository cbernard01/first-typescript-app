@classDecorator
class Boat {
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}.`;
  }

  @logError("Oops, boat has sunk.")
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    if (speed === "fast" && generateWake) {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function parameterDecorator(target: Boat, key: string, index: number): void {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat):void {
  console.log(constructor);
}

function logError(errorMessage: string): Function {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}

