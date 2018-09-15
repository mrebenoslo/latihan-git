class Hewan{
  constructor(nama, kaki, umur){
    this.nama = nama
    this.kaki = kaki
    this.umur = umur
    this.tidur = false
  }
  tertidur(){
    return this.tidur = true
  }
  terbangun(){
    return this.tidur = false
  }
}

class Gajah extends Hewan{
  constructor(nama, kaki, umur){
    super(nama, kaki, umur)
    this.lari = false
  }
  berlari(){
    console.log('gajah berlari')
    this.lari = true
  }
}

class Jerapah extends Hewan{
  constructor(nama, kaki, umur){
    super(nama, kaki, umur)
    this.jalan = false
  }
  berjalan(){
    console.log('jerapah berjalan')
    this.jalan = true
  }
}

const gajah = new Gajah('gajah1',4,10)
const jerapah = new Jerapah('jerapah1',4,8)

gajah.berlari()
jerapah.berjalan()

gajah.tertidur()
gajah.tidur
gajah.terbangun()