
## [Exercises 6] Berlatih Perulangan di JavaScript

### Looping

### 1. Melakukan Looping Menggunakan While


```javascript
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
```

    LOOPING PERTAMA
    2 - I love coding
    4 - I love coding
    6 - I love coding
    8 - I love coding
    10 - I love coding
    12 - I love coding
    14 - I love coding
    16 - I love coding
    18 - I love coding
    20 - I love coding
    LOOPING KEDUA
    20 - I will become Full Stack Developer
    18 - I will become Full Stack Developer
    16 - I will become Full Stack Developer
    14 - I will become Full Stack Developer
    12 - I will become Full Stack Developer
    10 - I will become Full Stack Developer
    8 - I will become Full Stack Developer
    6 - I will become Full Stack Developer
    4 - I will become Full Stack Developer
    2 - I will become Full Stack Developer





    0



### 2. Melakukan Looping Menggunakan For


```javascript
var c = 0;


console.log("LOOPING PERTAMA");

for(c = 1; c <= 20; c++) {
    
    console.log(c + " - I love coding");
  
    
}


console.log("LOOPING KEDUA")

for(c=20; c>=1 ; c--) {
    console.log(c + " - I will become full stack developer")
    
 }

```

    LOOPING PERTAMA
    1 - I love coding
    2 - I love coding
    3 - I love coding
    4 - I love coding
    5 - I love coding
    6 - I love coding
    7 - I love coding
    8 - I love coding
    9 - I love coding
    10 - I love coding
    11 - I love coding
    12 - I love coding
    13 - I love coding
    14 - I love coding
    15 - I love coding
    16 - I love coding
    17 - I love coding
    18 - I love coding
    19 - I love coding
    20 - I love coding
    LOOPING KEDUA
    20 - I will become full stack developer
    19 - I will become full stack developer
    18 - I will become full stack developer
    17 - I will become full stack developer
    16 - I will become full stack developer
    15 - I will become full stack developer
    14 - I will become full stack developer
    13 - I will become full stack developer
    12 - I will become full stack developer
    11 - I will become full stack developer
    10 - I will become full stack developer
    9 - I will become full stack developer
    8 - I will become full stack developer
    7 - I will become full stack developer
    6 - I will become full stack developer
    5 - I will become full stack developer
    4 - I will become full stack developer
    3 - I will become full stack developer
    2 - I will become full stack developer
    1 - I will become full stack developer


### 3. Angka Ganjil dan Genap


```javascript


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
```

    perulangan 1 - 100 dengan pertambahan counter sebanyak 1
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    GANJIL
    GENAP
    perulangan 1 - 100 dengan pertambahan counter sebanyak 2
     
    3 kelipatan 3
     
     
    9 kelipatan 3
     
     
    15 kelipatan 3
     
     
    21 kelipatan 3
     
     
    27 kelipatan 3
     
     
    33 kelipatan 3
     
     
    39 kelipatan 3
     
     
    45 kelipatan 3
     
     
    51 kelipatan 3
     
     
    57 kelipatan 3
     
     
    63 kelipatan 3
     
     
    69 kelipatan 3
     
     
    75 kelipatan 3
     
     
    81 kelipatan 3
     
     
    87 kelipatan 3
     
     
    93 kelipatan 3
     
     
    99 kelipatan 3
    perulangan 1 - 100 dengan pertambahan counter sebanyak 5
     
    6 kelipatan 6
     
     
     
     
     
    36 kelipatan 6
     
     
     
     
     
    66 kelipatan 6
     
     
     
     
     
    96 kelipatan 6
    perulangan 1 - 100 dengan pertambahan counter sebanyak 9
     
    10 kelipatan 10
     
     
     
     
     
     
     
     
     
    100 kelipatan 10

