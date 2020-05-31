function jumlahVolumeDuaKubus (a, b){
	var volumeA;
	var volumeB;
	var total;

	 volumeA = a + a + a;
	 volumeB = b + b + b;

	 total = volumeA * volumeB;

   return total;
}
alert (jumlahVolumeDuaKubus (12, 4));
alert (jumlahVolumeDuaKubus (10, 2));



function uang (l,h){
	return l+h;
}

var l = parseInt( prompt ('Silahkan Masukan Harga laptop :'));
var h = parseInt(prompt ('Silahkan Masukan Harga Hp :'));
var hasil = uang(l,h);
alert (hasil);