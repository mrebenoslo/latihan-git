class Kalkulator{
  constructor (angka1, angka2){
    this.hasil = 0
    this.angka1 = angka1
    this.angka2 = angka2
  }

  tambah(){
    return this.hasil = this.angka1 + this.angka2
  }
  kurang(){
    return this.hasil = this.angka1 - this.angka2
  }
  bagi(){
    return this.hasil = this.angka1 / this.angka2
  }
  kali(){
    return this.hasil = this.angka1 * this.angka2
  }
  tampilkanHasil(){
    console.log(this.hasil)
  }
}

const angka1 = 2
const angka2 = 3
const kalkulator = new Kalkulator(angka1, angka2)

kalkulator.tambah()
console.log(kalkulator.hasil)
kalkulator.kurang()
console.log(kalkulator.hasil)
kalkulator.kali()
console.log(kalkulator.hasil)
kalkulator.angka1 = 6
kalkulator.angka2 = 2
kalkulator.bagi()
console.log(kalkulator.hasil)