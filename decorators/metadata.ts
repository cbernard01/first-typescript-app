import "reflect-metadata"

@Controller
class PlaneCtrl {
  color: string = "red";

  @Get("/login")
  fly(): void {
    console.log("VRRRRRR");
  }
}

function Get(path: string): Function {
  return function (target: PlaneCtrl, key: string): void {
    Reflect.defineMetadata("path", path, target, key);
  }
}

function Controller(target: typeof PlaneCtrl): void {
  for (let key in target.prototype) {
      const path = Reflect.getMetadata("path", target.prototype, key);
      console.log(path);
  }
}


