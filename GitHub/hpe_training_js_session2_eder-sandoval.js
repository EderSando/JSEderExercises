var verdadero = true;
var falso = false;
var affirmative = true;
var edad = 29;
var name = 'Eder';
var a = 10;
var b = 10;
var work = 'hpe';
var attheend = 'ok';

/*1.- Using Logical Operators, write 6 comparations, 3 that returns true and 3 others that return false.
It can be either a comparation between a length of a String and a number, or just between numbers.
*/
console.log("Mide Esto :)".length>10);
console.log((100*2)>=(140*2));
console.log(200*2<=190+100);
console.log(500/2==110*2);
console.log("Esternocleidomastoideo".length<=8);
console.log("Para que medir un string sirve de algo hacerlo?".length<=50);


//2.- Using Substrings and this coordinates: (0,2), (2,3), (0,5), (1,3), (5,7), Write 5 different sentences and print out the output.

console.log("Schopenhaurer".substring(0,2));
console.log("Focault".substring(2,3));
console.log("Babasonicos".substring(0,5));
console.log("Logan".substring(1,3));
console.log("x23".substring(5,7));

//3.- Declare 5 Arrays and print only one of the values inside, it can be any of them.

var Narray = [100, 200, 300, 400, 500];
var Larray = ["Ricardo", "Monica", "Javier", "Lucy", "Eduardo"];
var MixArray =  ["Doom", 2016, "Left4Dead", 2014, "Minecraft", 2011];
var SnArray = [250, 600, 900, 1200, 1500];
var CrazyArray = ["Manager", "Brownies", "Tester", "Developer", "CrazyDot"];


console.log(Narray[3]);
console.log(Larray[0]);
console.log(MixArray[1]);
console.log(SnArray[4]);
console.log(CrazyArray[3]);


//4.- Write 6 simple if's, where if the condition is true, prints this: "I'm doing it in the right way"

if(affirmative == true){
  console.log("Am I doing this right?");
} else {
  console.log("wrong");
}

if(edad == 29){
  console.log("Almost level 3.0");
}else {
  console.log("wrong");
}

if(name== 'Eder'){
  console.log("Thats my name");
}else {
  console.log("wrong");
}

if(a==b){
  console.log("Easy Math");
}else{
  console.log("wrong");
}

if (work == 'hpe') {
  console.log("yes i do work here");
}else {
  console.log('wrong');
}

if(attheend == 'ok'){
  console.log("you only see this output but its ok");
}else {
  console.log("wrong");
}


//5.- Based on Modulo operations, write 6 sentences where 3 of them returns 0 as result and 3 others with 1 as the output. Try to use big numbers

console.log(1500 % 5);
console.log(997 % 997);
console.log(100 % 99);
console.log(571 % 570);
console.log(10000 % 100);
console.log(150800 % 150799);
