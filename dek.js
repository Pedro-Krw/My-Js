//Game Susun Kata
// alert ('Selamat Datang Di Game Susun Kata');
// alert ('velo tikcan yangsa');
//komputer memebangkitkan bialnagan acak untuk mengacak kata
var tanya= true;
while (tanya){
var komputer = Math.floor(Math.random()*4);
 if (komputer < 2){
 	komputer= 'velo';
 }else if ( komputer >2 && komputer <= 3){
 	komputer = "tikcan";
 }else{
 	komputer = 'yangsa';
 }
//user mengatur ulang kata yang di acak secara random
var user = prompt ('Silahkan Mengatur Kata Berikut ' + komputer);
//aturan dalam game
var hasil = '';
    if (user == 'love'){ hasil = (komputer == 'velo')? 'Anda Benar':'Anda Salah';

    } 
    else if (user == 'cantik'){ hasil = (komputer == 'tikcan')? 'Anda Benar':'Anda Salah';

    }
    else if (user == 'sayang'){ hasil = (komputer == 'yangsa')? 'Anda Benar':'Anda Salah';

    }else {
    	hasil = 'Anda Memasukan Kata Yang Tidak Tepat'
    }

//tampilkan hasilnya
alert (hasil);
tanya = confirm ('Lagi?');
}
alert ('Terima Kasih Sudah Bermain');
