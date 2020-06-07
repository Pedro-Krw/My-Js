// Membuat Object
// var = 10
// console.log (window.a);

// cara 1 - function declaratiion
 function halo (){
 	console.log('halo',1,40);
 }
halo();

 // cara 2 - mengunakan object literal

  var obj ={};
// ini bagian method
   obj.halo = function (){
   	console.log('halo');
   }
   obj.halo();

// cara 3 - mengunakan constructor
 function Halo(){
      console.log('Halo');
 }
  new Halo();