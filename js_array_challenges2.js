var input = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"] 
            
function dataHandling2( input ){
  console.log(input.slice(0))
  var tanggal = input[3][0]+input[3][1]
  var bulan = input[3][3]+input[3][4]
  var tahun = input[3][6]+input[3][7]+input[3][8]+input[3][9]
  tanggal = parseInt(tanggal)
  bulanInt = parseInt(bulan)
  tahun = parseInt(tahun)
  var kalender = [tanggal,bulanInt,tahun]
  switch(bulanInt){
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
  }
  console.log(namaBulan)
  console.log(kalender.sort())
  console.log(tanggal+'-'+bulan+'-'+tahun)
  var nama = input[1]
  nama = nama.slice(0,15)
  console.log(nama)
}

dataHandling2(input)
