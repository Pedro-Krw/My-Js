// Pembuatan anonymous function

 (function(){
 	for (i = 0; i < 10; i++){
 		console.log(i);
 	}
 }());

 (function(){
 	let komputer = Math.floor(Math.random()*5);
 	if (komputer < 1){
 		komputer = [0,3,5,1,1,1,0,9,7,['Zoro',89,0,7,7,0,'clooning'],'False'];
 		}
 	else if (komputer >1 && komputer <= 2){
 		komputer = 'Napi';
 		}
 	else if (komputer >2 && komputer <= 3){
 		komputer = 'anonymous';
 		}
 	else if (komputer >3 && komputer <= 4){
 		komputer = [0,1,'Random',9,9,6,7,['const',3,5,777,0,0,1,5],'acak','Clooning'];
 		}
 	else {
 		komputer = 'True';
 	}
 	 console.log(komputer);
 }());