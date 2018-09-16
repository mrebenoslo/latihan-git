// case 1 dengan while
var i = 0
var y = 20
while(i <= 20 || y >= 2){
  if(i===0){
    console.log("LOOPING PERTAMA")
  }else if(i%2===0){
    console.log(i+' - I love coding')
  }
  if(i === 20){
    console.log("LOOPING KEDUA")
    console.log(i+' - I will become developer')
    i++
    y--
  }else if(i<=20){
    i++
  }else if(i>20){
    y--
    if(y%2===0){
      console.log(y+' - I will become developer')
    }
  }
}
/*----------------------------------------------------------------*/
console.log('*****************************************************')
//case 2 dengan for 
var i = 0;
var y = 20
for(i=1;i<=20 || y >= 2 ;i++){
  if(i===1){
    console.log("LOOPING PERTAMA")
  }
  if(i<=20){
    console.log(i+' - I love coding')
  }
  if(i===20){
    console.log("LOOPING KEDUA")
    console.log(i+' - I will become developer')    
  }
  if(i>20){
    y--
    console.log(y+' - I will become developer')
  }
}
/*----------------------------------------------------------------*/
console.log('*****************************************************')
//case 3 dengan ganjil genap

for(i=1 ; i<=100; i++){
  console.log("Counter sekarang : " + i)
  if(i%2 !== 0){
    console.log("ganjil")
  }else{
    console.log("genap")
  }
}

console.log('*****************************************************')
for(i=1 ; i<=100; i=i+2){
  console.log("Counter sekarang : " + i)
  if(i%3 !== 0){
    console.log("")
  }else{
    console.log(i + "  KELIPATAN 3")
  }
}

console.log('*****************************************************')
for(i=1 ; i<=100; i=i+5){
  console.log("Counter sekarang : " + i)
  if(i%6 !== 0){
    console.log("")
  }else{
    console.log(i + "  KELIPATAN 6")
  }
}

console.log('*****************************************************')
for(i=1 ; i<=100; i=i+9){
  console.log("Counter sekarang : " + i)
  if(i%10 !== 0){
    console.log("")
  }else{
    console.log(i + "  KELIPATAN 10")
  }
}