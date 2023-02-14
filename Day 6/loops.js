const countries = ['Australia', 'Canada', 'China', 'Japan']
const dict = {
    Australia: 'Canberra',
    Canada: 'Ottawa',
    China: 'Beijing',
    Japan: 'Tokyo'
}

//!! For loop
//` for(iterator; condition; change){statements}

for(i = 0; i < 10; i++){
    console.log(i);
}

const capitalCountries = []

//` for of loop
for(country of countries){
    capitalCountries.push(country.toUpperCase())
}
console.log(capitalCountries);

//` for in loop
for(country in dict){
    console.log(`${country}: ${dict[country]}`);
}