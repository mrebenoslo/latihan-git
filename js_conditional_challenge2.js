var hari = 31
var bulan = 12
var tahun = 2200

switch(bulan){
  case 1:
      var namaBulan = 'Januari'
      break
  case 2:
      var namaBulan = 'Februari'
      break
  case 3:
      var namaBulan = 'Maret'
      break
  case 4:
      var namaBulan = 'April'
      break
  case 5:
      var namaBulan = 'Mei'
      break
  case 6:
      var namaBulan = 'Juni'
      break
  case 7:
      var namaBulan = 'Juli'
      break
  case 8:
      var namaBulan = 'Agustus'
      break
  case 9:
      var namaBulan = 'September'
      break
  case 10:
      var namaBulan = 'Oktober'
      break
  case 11:
      var namaBulan = 'November'
      break
  case 12:
      var namaBulan = 'Desember'
      break
  default:
      var namaBulan = ''
}

if(namaBulan === '')
{
  console.log('Bulan hanya boleh di input 1 s.d. 12')
}else if(hari < 1 || hari > 31){
  console.log('Hari hanya boleh di input dari tanggal 1 s.d. 31')
}else if(tahun < 1900 || tahun > 2200 ){
  console.log('Tahun hanya boleh di input dari Tahun 1900 s.d. 2200')
}else{
  console.log(hari + ' ' +namaBulan+ ' ' +tahun)
}