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
 
// Latihan Membuat Function membangkitkan bilangan random dari 1 sampai 5

function random (){
	var komputer = Math.floor(Math.random()*5);
	 if (komputer < 1){
	 	komputer = 'satu';
	 }
	 else if (komputer >1 && komputer <= 2){
	 	komputer = 'dua';
	 }
	 else if (komputer >2 && komputer <=3){
	 	komputer= 'tiga'
	 }
	 else if (komputer >3 && komputer <=4){
	 	komputer= 'empat'
	 }
	 else {
	 	komputer = 'lima';
	 }
	return komputer;
}
//membuat function mencetak bilangan ganjil dan genap
function mencetak(){
var napi;

if (napi % 2 ===0){
	alert('Ini adalah bilangan Genap');
}
else if (napi %2 === 1){
	alert('ini adalah bilangan Ganjil');
}
else{
	
}
return napi;
}
// Bagian Array
var Arr = 

    
    //Penambahan 
     // pembuatan functional programing


    // secara declaration

    function kali (){
    	var a = 10;
    	var b = 20;
    	var hasil = a * b;
    	return hasil;
    }


    function tambah (){
    	var c = 5;
    	var d = 15;
    	var total = c + d;
    	return total;
    }


    function acak (){
    	var komputer = Math.floor(Math.random()*7);
           if (komputer < 1){
           	komputer = 10;
           }
           else if (komputer > 1 && komputer <= 2){
           	komputer = 20;
           }
           else if (komputer > 2 && komputer <= 3){
           	komputer = 30;
           }
           else if (komputer > 3 && komputer <= 5){
           	komputer = 40;
           }
           else if (komputer > 5 && komputer <= 6){
           	komputer = 50;
           }
           else {
           	komputer = 60;
           }
           return komputer;
           } 


   alert (acak());
