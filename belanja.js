var tanya = true;
while (tanya){

 var user = prompt ('barang yang tersedia meliputi : teh gula kopi ');

//hasil yang akan di tamplkan
hasil = '';

  if ( user=='teh'){ hasil =(komputer ='Harganya : 5.000');
  }
  else if ( user == 'gula'){ hasil =(komputer = 'Harganya 12.000');
  }
  else if (user == 'kopi'){ hasil = (komputer = 'Harganya 6.000');

  }else {
  	komputer = 'barang yang anda cari stok nya sudah habis !'
  }
  alert (komputer);

tanya = confirm ('Anda inggin Mengecek harga Barang Lainya Lagi ?');
}
alert ('Terima kasih sudah mampir di toko kami');