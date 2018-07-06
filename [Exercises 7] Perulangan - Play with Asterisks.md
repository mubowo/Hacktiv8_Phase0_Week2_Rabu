
## [Exercises 7] Perulangan - Play with Asterisks

### Looping

#### 1. Menyusun Barisan Bintang


```javascript
var rows1 = 5;

for (var a = 1; a <= rows1 ; a++) {

    console.log("*");
    
}
```

    *
    *
    *
    *
    *


#### 2. Menyusun Barisan Bintang Dengan Nested Looping


```javascript
var rows2 = 5;
var e = 5;


for (var c = 1 ; c <= rows2; c++) 

    { b = " ";
      
      for (var d = 1; d <= e; d++) 
          {
               b = b + "*";
                           
          }
     console.log(b);
    }    

```

     *****
     *****
     *****
     *****
     *****


#### 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping


```javascript

var rows3 = 5;


for (var f = rows3 ; f >= 1; f--) {
    
    var h = "";
    
      for (var g = f; g <= rows3; g++) {
          
          h += "*";          
     }
    
 console.log(h);
}
```

    *
    **
    ***
    ****
    *****

