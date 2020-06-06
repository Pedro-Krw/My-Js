// Membuat Object

 var mhs = {

      nama : 'Pedro Korwa',
      umur : 17,
      asal : ['Biak', 'Papua'],
      alamat : {

      	    jalan : 'ambroben sup no 12',
      	    kota : 'Biak',
      	    provinsi : 'papua'
      }
 


 };

 // mengunakan Constructor

   function Mahasiswa (nama,nrp,email,jurusan){

   	  this.nama = nama;
   	  this.nrp = nrp;
   	  this.email = email;
   	  this.jurusan = jurusan;
   }

   var mhs4 = new Mahasiswa ('pedro','05111940008998','pedro@gmail.com','informatika')