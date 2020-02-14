const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(1, 2));

function divide(a: number, b: number): number {
  return a / b;
}

console.log(divide(20, 4));

const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(20, 4));

const logger = (message: string): void => {
  console.log(message);
};
logger("test");

const throwError = (message: string): string => {
  if (!message) {
    throw new Error("no error");
  }
  return message;
};
logger(throwError("test"));

const toDaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(toDaysWeather);
