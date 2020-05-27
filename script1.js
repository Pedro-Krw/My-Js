var pace = prompt ('Masukan Angka Yang Anda Mau :')

var insos = '';

for (napi=0; napi < pace; napi ++){
    for(zoro = 0; zoro <= napi; zoro++){
    	insos +='*';
    }
    insos +='\n'
}
console.log(insos);
