 var penumpang = ['zoro', undefined , 'war'];
//function ekspression
 var tambahPenumpang = function (namaPenumpang, penumpang){

 	//jika  angkot kosong
 	  if (penumpang.length == 0){
 	     //tambah penumpang dari awal array
 	     penumpang.push(namaPenumpang);
 	     //kembalikan isi array dan keluar dari function
 	      return penumpang;

 	     } else {
 	      	   //telusuri seluruh isi kursi dari awal 
 	      	   for ( i = 0; i < penumpang.length; i++ ){
 	              //jika ada kursi kosong 
 	              if (penumpang[i] == undefined){ 
 	              //tambah penumpang di kursi tersebut
 	              penumpang[i] = namaPenumpang;
 	              //kembalikan isi array dan keluar dari function
 	              return penumpang;
 	          }
 	            //jika sudah ada nama yang sama 
 	            else if (penumpang[i] == namaPenumpang){
 	               //tampilan pesa kesalahan
 	               console.log(namaPenumpang + ' ini de su ada di dalam mobil');
 	               //kembalikan isis array dan keluar dari function
 	                return penumpang;
 	          }
 	        //jika seluruh kursi terisi 
 	        else if(i == penumpang.length - 1) {
 	         //tambahkan pemnumpang di akhir array 
 	         penumpang.push(namaPenumpang);
 	             //kembalikan isis array dan keluar dari function
 	             return penumpang;
 	         }
          }
      }
 }


// ================= Hapus Penumpang================= //
   
  var hapusPenumpang = function (namaPenumpang, penumpang0){
  	if (penumpang.length == 0){
  		console.log('Angkot masih Kosong');
  		return penumpang;
  	}else {
  		for (var i = 0; i< penumpang.length; i++){
             if (penumpang [i] == namaPenumpang){
             	penumpang[i] = undefined;
             	return penumpang;

             } else if (i == penumpang.length - 1){
             	console.log(namaPenumpang + 'Tidak ada dalam mobil');
             	return penumpang
             }
  		}
  	 }
  }



    // jika angkot kosong
      //tampilkan pesan bahwa angkot kosong dan 
      //tidak mungkin ada penumpang turun
      //kembalikan isi array dan keluar dari function

   //else 
      //telusuri saluruh kursi dari awal 
       //jika nama penumpang sesuai
         //hapus penumpang dengan mengubah namanya menjadi undefine
         //kembalikan isi array dan keluar daari function
      //jika tidak ada nama yang sesuai tampilkan pesan kesalahanya
        //kembalikan isi array dan keluar dari function











// var jumlahAngkot = prompt ('Masukan Angka :')
// var angkotBeroperasi = 6;
// var no5 = 5;


// for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){

// 	 if (noAngkot <= 6 && noAngkot !==5) {
// 	 	console.log('angkot no '+ noAngkot +' Beroperasi dengan baik');
// 	 }
// else if(noAngkot === no5){
//      console.log('angkot no '+ no5 + ' sedang Lembur');
// 	 }
// else if (noAngkot === 8 ||  noAngkot ===10 ) {
// 	console.log('angkot no '+ noAngkot + ' sedang Lembur');
// }
// 	 else{
// 	 	console.log('angkot no '+ noAngkot + ' Tidak Beroperasi dengan Baik');
// 	 }
// }