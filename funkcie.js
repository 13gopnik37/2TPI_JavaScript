// mojaPrvaFunkcia();
// function mojaPrvaFunkcia() {
//   alert("toto je moja prva funckia");
//   console.log("TOTO JE MOJA PRVA FUNCKIA!!!!!");
// }
// mojaPrvaFunkciaSParametrom("toto je moja prva funkcia s parametrom");
// function mojaPrvaFunkciaSParametrom(lokalnaPremenna) {
//   console.log(lokalnaPremenna);
//}
// console.log(a.indexOf("te"));
// console.log(console);
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.substring(3, 7)); *
// console.log(a.endsWith("3")); *
// console.log(a.repeat(10));
// console.log(a.replace("Ulica", "namestie")); *

function funkcia() {
  alert("tot je moja prva funkcia");
  console.log("TOTO JE MOJA PRVA FUNCKIA!!!!");
}
mojaPrvaFunkciaSParametrom("toto je moja prva funkcia s parametrom");
function mojaPrvaFunkciaSParametrom(lokalnaPremenna) {
  console.log(lokalnaPremenna);
}
mojaToUpperCase("funkcia s malym");
function mojaToUpperCase(vstupnyText) {
  let upravenyText = vstupnyText.toUpperCase();
  console.log(upravenyText);
}
mojaRepeat("ahoj ", 10);
function mojaRepeat(k, cislo) {
  let j = k.repeat(cislo);
  console.log(j);
}

mojaSubString("Ahoj ja sa volam", 2, 5);
function mojaSubString(t, cislica, druha) {
  let b = t.substring(cislica, druha);
  console.log(b);
}

mojaEndsWith("ahoj ja sa volam", "i");
function mojaEndsWith(r, premenna) {
  let o = r.endsWith(premenna);
  console.log(o);
}

mojaReplace("ahoj ja sa volam", "ahoj", "cau");
function mojaReplace(h, prvaPremenna, druhaPremenna) {
  let n = h.replace(prvaPremenna, druhaPremenna);
  console.log(n);
}

let mojeMeno1 = "kristian";
console.log(mojeMeno1.toUpperCase().repeat(2));

// let den = 6;
// let mesiac = 2;
// let rok = 2007;
// let vysledok7 = den + mesiac + rok;
// sucetCisel("Sucet cisiel v datume mojho narodenia je","den"+"mesiac"+"rok"="vysledok7");
// function sucetCisel(den, mesiac, rok, vysledok7) {
//   let z = w.(den,mesiac,rok,vysledok7);
//   console.log(z);
// }
