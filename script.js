// 1

console.log(hello);                                   
var hello = 'world';                                 

//var hello
//console.log(hello); // undefined
//hello = 'world';

//2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle;
//function test(){
//      var needle;
//      needle= 'magnet';
//      console.log(needle); // imprime 'magnet' en la consola
//}
//needle= 'haystack';
//test();

//3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan 
//function print(){ // (no se ejecta la funcion porque en ninguna parte hay una llamada a la funciÓN)
//    brendan = 'only okay'; 
//    console.log(brendan);  // Se imprimiría 'only okay' en la consola
//}
//brendan = 'super cool'; 
//console.log(brendan);     // Se imprime 'super cool' en la consola

//4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food;
//function eat(){
//    var food
//    food = 'half-chicken';
//    console.log(food);
//    food = 'gone';
//}
//food = 'chicken';
//console.log(food); // Se imprime 'chicken' en la consola
//eat(); //Imprime 'half-chicken' en la consola

//5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//var mean;
//mean(); // mean is not a function
//console.log(food); // food is undefined
//var mean = function() {
//    var food;
//    food = "chicken";
//    console.log(food); //Se imprimiria 'chicken'
//    food = "fish";
//    console.log(food); //Se imprimiria 'fish'
//}
//console.log(food); // food is undefined

//6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre); // Se imprimiria 'rock'
//     genre = "r&b"; 
//     console.log(genre); // Se imprimiria 'r&b'
// }
// console.log(genre);// genre is undefined
// genre = "disco";
// rewind(); //Se llama a rewind Se imprime 'rock' y 'r&b' en la consola
// console.log(genre); // Se imprime 'disco' en la consola

//7 

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//function learn() {
//    var dojo;
//    dojo = "seattle";
//    console.log(dojo); // Se imprime 'seattle'
//    dojo = "burbank";
//    console.log(dojo); // Se imprime 'burbank'
//}
//dojo = "san jose"; 
//console.log(dojo); //Reference error dojo undefined
//learn();//Se llama a learn Se imprime 'seattle' y 'burbank' en la consola
//console.log(dojo); //Reference error dojo undefined

//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//function makeDojo(name, students){
//    const dojo = {};
//    dojo.name = name;
//    dojo.students = students;
//    if(dojo.students > 50){
//        dojo.hiring = true;
//    }
//    else if(dojo.students <= 0){
//        dojo = "closed for now"; //Error
//    }
//    return dojo;
//}
//console.log(makeDojo("Chicago", 65)); Imprime {name:'Chicago',studens:65,hiring:true}
//console.log(makeDojo("Berkeley", 0)); //Error
