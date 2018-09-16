console.log('--------------------------------------------------')
var rows1 = 5
for(i=1;i<=rows1;i++){
  console.log('*')
}

console.log('--------------------------------------------------')

var rows2 = 5
var text = ''
for(i=1;i<=rows2;i++){
  for(y=1;y<=rows2;y++){
    text = text + '*'
  }
  console.log(text)
  text=''
}

console.log('--------------------------------------------------')

var rows2 = 5
var text = ''
for(i=1;i<=rows2;i++){
  for(y=1;y<=i;y++){
    text = text + '*'
  }
  console.log(text)
  text=''
}