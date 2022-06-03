// forecast registired
const kelvin = 293;
/*
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
*/
const celcius = kelvin - 273;
let fahrenheit = celcius * (9/5) + 32;
/*

When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
*/
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

/*
If you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
*/
let newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`)