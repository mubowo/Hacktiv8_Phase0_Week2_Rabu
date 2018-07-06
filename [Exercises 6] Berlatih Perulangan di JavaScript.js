
var a = 10;
var b = 0;

console.log("LOOPING PERTAMA")

while (0 < a) {
    a -= 1;
    b += 2;
    
    console.log(b + " - I love coding");
    
}

console.log("LOOPING KEDUA")

while (0 < b) {
  
    console.log(b + " - I will become Full Stack Developer");
    a += 1;
    b -= 2;
    
    
    
}

var c = 0;


console.log("LOOPING PERTAMA");

for(c = 1; c <= 20; c++) {
    
    console.log(c + " - I love coding");
  
    
}


console.log("LOOPING KEDUA")

for(c=20; c>=1 ; c--) {
    console.log(c + " - I will become full stack developer")
    
 }




console.log ("perulangan 1 - 100 dengan pertambahan counter sebanyak 1");

for (var e=1; e<=100; e++) {
    
    if (e % 2 == 0) {
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}


console.log ("perulangan 1 - 100 dengan pertambahan counter sebanyak 2");

for (var e=1; e<=100; e+=2) {
    
    if (e % 3 == 0) {
        console.log(e + " kelipatan 3")
    } else {
        console.log(" ")
    }
}


console.log ("perulangan 1 - 100 dengan pertambahan counter sebanyak 5");

for (var e=1; e<=100; e+=5) {
    
    if (e % 6 == 0) {
        console.log(e + " kelipatan 6")
    } else {
        console.log(" ")
    }
}




console.log ("perulangan 1 - 100 dengan pertambahan counter sebanyak 9");

for (var e=1; e<=100; e+=9) {
    
    if (e % 10 == 0) {
        console.log(e + " kelipatan 10")
    } else {
        console.log(" ")
    }
}
