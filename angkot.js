var jumlahAngkot = prompt ('Masukan Angka :')
var angkotBeroperasi = 6;
var no5 = 5;


for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){

	 if (noAngkot <= 6 && noAngkot !==5) {
	 	console.log('angkot no '+ noAngkot +' Beroperasi dengan baik');
	 }
else if(noAngkot === no5){
     console.log('angkot no '+ no5 + ' sedang Lembur');
	 }
else if (noAngkot === 8 ||  noAngkot ===10 ) {
	console.log('angkot no '+ noAngkot + ' sedang Lembur');
}
	 else{
	 	console.log('angkot no '+ noAngkot + ' Tidak Beroperasi dengan Baik');
	 }
}