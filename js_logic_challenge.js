//CHANGE ME
function changeMe(arr){
  for(i=0;i<arr.length;i++){
    if(arr[i][3] != ' ' && arr[i][3] <= '2018'){
      age = arr[i][3]
    }else{
      age = 'Invalid Birth Year'
    }
    person = {
      firstName :arr[i][0],
      lastName : arr[i][1],
      gender : arr[i][2],
      age : age,
    }
    console.log(i+1+'. '+person.firstName+' '+person.lastName)
    console.log(person)
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]);

// SHOPPING TIME
console.log('--------------------------------------------------')

function shoppingTime(memberId = '', money ='') {
  if(memberId === ''){
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }else if(money ===''){
    return "Mohon maaf, toko X hanya melayarni pembelian cash"
  }else{
    change = 0;
    change = money
    var listPurchased =[]

    if (change < 50000){
      listPurchasedqty = listPurchased.push('Mohon maaf uang tidak cukup')
    }
    if (change >= 1500000){
      listPurchasedqty = listPurchased.push('Sepatu Stacattu')
      change = change - 1500000
    }
    if (change >= 500000){
      listPurchasedqty = listPurchased.push('Baju Zoro')
      change = change - 500000
    }
    if (change >= 250000){
      listPurchasedqty = listPurchased.push('Baju H&N')
      change = change - 250000
    }
    if (change >= 175000){
      listPurchasedqty = listPurchased.push('Sweater Uniqloo')
      change = change - 175000
    }
    if (change >= 50000){
      listPurchasedqty = listPurchased.push('Casing Handphone')
      change = change - 50000
    }

    member = {
      memberId : memberId,
      money : money,
      listPurchased : listPurchased,
      changeMoney : change
    }
    return member
  }
} 
console.log(shoppingTime('234JdhweRxa53', 700000));
console.log('--------------------------------------------------')
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log('--------------------------------------------------')
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log('--------------------------------------------------')
console.log(shoppingTime('234JdhweRxa53', 49000)); 
console.log('--------------------------------------------------')
console.log(shoppingTime()); 


console.log('--------------------------------------------------')

// TOKO X
function countProfit(shoppers = ' ') {
  var result = []
  if (shoppers.length <= 0){
    return result
  }
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var listShoppers = []
  var left = 0
  var profit = 0
  
  for (var i = 0; i < listBarang.length; i++){
    left = listBarang[i][2]
    for (var y = 0; y < shoppers.length; y++){
      if(shoppers[y].product === listBarang[i][0]){
        if(shoppers[y].amount <= left){
          qtyListShoppers = listShoppers.push(shoppers[y].name)
          left = left - shoppers[y].amount
          profit = profit + (shoppers[y].amount * listBarang[i][1])
        }
      }
    }
    result.push({
      product: listBarang[i][0],
      shoppers: listShoppers,
      leftOver: left,
      totalProfit: profit
    })

    listShoppers =[]
    left = 0
    profit = 0
  }
  return result
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log('--------------------------------------------------')
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log('--------------------------------------------------')
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log('--------------------------------------------------')
console.log(countProfit([]));




