// Note: Enum have fast traversal and are easy to use.
// Note: Enum are a good choice when you have a fixed set of related values that you want to represent in your code.
enum weatherConditionsEnum {
    sunny ,
    rainy ,
    cloudy,
    snowy = "snowy1",
    windy = "windy",
    stormy = "stormy",
    foggy = "foggy",
}

let weatherConditions1 = ["sunny1", "rainy1", "cloudy1", "snowy1", "windy1", "stormy1", "foggy1"];
let weatherConditions2 = {"sunny2": "rainy2", "cloudy2": "snowy2", "windy2": "stormy2"};

console.log(weatherConditionsEnum.sunny);
console.log(weatherConditionsEnum.rainy);
console.log(weatherConditionsEnum.snowy);
console.log(weatherConditions1[0]);
console.log(weatherConditions2.windy2);

