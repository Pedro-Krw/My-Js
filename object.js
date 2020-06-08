// Membuat Object
// var = 10
// console.log (window.a);

// cara 1 - function declaratiion
 function halo (){
 	console.log('halo',1,40);
 }
halo();

 // cara 2 - mengunakan object literal

  var obj ={};
// ini bagian method
   obj.halo = function (){
   	console.log('halo');
   }
   obj.halo();

// cara 3 - mengunakan constructor
 function Halo(){
      console.log('Halo');
 }
  new Halo();


//object Method MEMBUAT APLIKASI TAKSI SEDERHANA//

// pengelolaan taksi mengukan object javasvript
  // sopir, trayek, kas, penumpangNaik, penumpangTurun//
//MEMBUAT OBJECT ANGKOT

   function Taksi(sopir, trayek, penumpang, kas){
     this.sopir = sopir;
     this.trayek = trayek;
     this.penumpang = penumpang;
     this.kas = kas;
 //Membuat sebuah MEthod = function yang ada di dalam object
     this.penumpangNaik = function (namaPenumpang){
     	this,penumpang.push(namaPenumpang);
     	return this.namaPenumpang;
     }
//Method ke dua
     this.penumpangTurun = function (namaPenumpang, bayar){
     	if (this.penumpang.length === 0){
     		alert ('Taksi Masih Kosong');
     		return false;

     	}
 //Method Penumpang turun

        for (i = 0; i < this.penumpang.length; i++){
        	if (this.penumpang[i] == namaPenumpang);{
        		this.penumpang[i] = undefined;
        		this.kas +=  bayar;
        		return this.penumpang;

          }
        }
      }
    }

var nama = prompt ('Silahkan Masukan Nama Sopir :');
var jalur1 = prompt ('masukan Jalur rute 1 anda');
var jalur2 = prompt ('masukan Jalur rute 2 anda');
//jumlah taksi yang beredar
var taksiEko = new Taksi(nama, [jalur1, jalur2],[],0);
var taksiAki = new Taksi('Bertho', ['Kota' , 'Darfuar'],[],0);
















// Membuat Object
// var = 10
// console.log (window.a);

// cara 1 - function declaratiion
//  function halo (){
//  	console.log('halo',1,40);
//  }
// halo();

 // cara 2 - mengunakan object literal

  // var obj ={};
// ini bagian method
   // obj.halo = function (){
   // 	console.log('halo');
   // }
   // obj.halo();

// cara 3 - mengunakan constructor
 // function Halo(){
 //      console.log('Halo');
 // }
 //  new Halo


