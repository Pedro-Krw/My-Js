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

// penmbahan

function kubus (a,b){
	var kubusA = a * a * a;
	var kubusB = b * b * b;
	var hasil = kubusA + kubusB;
	return hasil;
}
   
var komputer = Math.floor(Math.random()*10);
   if ( komputer < 5){
   komputer = komputer + kubus(2,3);
   }
   else if ( komputer >5 && komputer <= 8){
   	komputer = komputer * kubus (2,3);
   }
   else if (komputer >8 && komputer <=10){
   	komputer = 'Ini sisa yaitu 9';
   }
   else {
   	komputer = 'ini sisa yaitu 10';
   }
   alert (komputer);
 
