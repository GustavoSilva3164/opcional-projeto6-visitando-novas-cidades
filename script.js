var touristName = prompt("Qual seu nome turista?");

var visitedCities = "";
var numberOfCities = 0;
var response = prompt("Você visitou alguma cidade? (s/n)");

while (response === 's') {
    var city = prompt("Qual é o nome da cidade visitada?");
    
    if (numberOfCities === 0) {
        visitedCities = "- " + city;
    } else {
        visitedCities += "\n- " + city;
    }
    
    numberOfCities++;
    
    response = prompt("Você visitou alguma outra cidade? (s/n)");
}

console.log("Turista: " + touristName);
console.log("Quantidade de cidades visitadas: " + numberOfCities);

if (numberOfCities > 0) {
    console.log("Cidades visitadas:\n" + visitedCities);
} else {
    console.log("Nenhuma cidade visitada.");
}
