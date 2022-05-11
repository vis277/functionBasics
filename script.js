/**
 * 
 * @returns hardcode name
 */
function Myname(){
    return "My name is Vishal Kumar";
}
console.log("LN8 :",Myname());
/**
 * 
 * @param {takes input as} name 
 * @returns a message as name
 */

function Myname2(name){
    return "My name is :"+name;
}
console.log("LN18 :",Myname2("Vishal Kumar"));

console.log("LN20 :" ,Myname2("Ram"));
/**
 * 
 * @param {take name as input} name 
 * @param {takes age as input } age 
 * @param {takes phone number as  input} phonenumber 
 * @returns details of user
 */

function MyDetails(name,age,phonenumber){
    return "My name is :"+name+" "+" "+ "My phone Number is :"+phonenumber+" "+ "My age is :"+age;
}

console.log("LN33 :",MyDetails("Vishal Kumar","28",9666666666))
console.log("LN34 :",MyDetails("Ram",22,9666666666))
/**
 * 
 * @param {first parameter} one 
 * @param {second parameter} two 
 * @param {third parameter} three 
 * @param {four parameter} four 
 * @returns will always return fix message no whatever is passed as an argument.
 */

function test(one,two,three,four){
return "No parameters were returned";
}
console.log("LN40 :",test("Vishal kuamr",25,7));
/**
 * 
 * @param {input  1} a 
 * @param {input  2} b 
 * @returns sum
 */

function sum(a,b){
    return a+b;
}

console.log("LN59-",sum(10,30));

console.log("LN60-",sum("name",30));

console.log("LN61-",sum(10,[]));//output is 10 .It's converting [] into blank string

console.log("LN62-",sum(10,{name:"vishal kumar"}));//output of {} is object

console.log("LN63-",sum(10,null));

console.log("LN64-",sum(10,undefined))

console.log("LN65-",sum(10,false))

console.log("LN66-",sum(10,''))

console.log("LN67-",sum(10,NaN))

console.log("LN68-",sum(10,0))
/**
 * 
 * @param {input 1} a 
 * @param {input 2} b 
 * @returns substraction
 */

 function substraction(a,b){
    return a-b;
}

console.log("LN89-",substraction(10,30));

console.log("LN91-",substraction("name",30));

console.log("LN93-",substraction(10,[]));//output is 10 .It's converting [] into blank string

console.log("LN95-",substraction(10,{name:"vishal kumar"}));//output of {} is object

console.log("LN97-",substraction(10,null));

console.log("LN99-",substraction(10,undefined))

console.log("LN101-",substraction(10,false))

console.log("LN103",substraction(10,''))

console.log("LN105-",substraction(10,NaN))

console.log("LN107-",substraction(10,0))

console.log("LN109-",substraction(10+20,"abc"))

/**
 * 
 * @param {input with default value 10} a 
 * @param {input with default value 10} b 
 * @returns sum;
 */

function sumWithdefautls(a=10,b=10){
return a+b;
}

console.log("LN115-",sumWithdefautls());//retuned the default sum

console.log("LN117-",substraction(10,''))

console.log("LN119-",substraction(10,NaN))

console.log("LN121-",substraction(10)) // not picking second value as default

/**
 * 
 * @param {enter your message} enter 
 * @returns message or default message;
 */
function message(enter="please enter the message"){
return enter;
}

console.log("LN 133-",message("Hi"))

console.log("LN 135-",message())

/**
 * 
 * @param {input by user} input 
 * @returns truthy or falsy values
 */

 console.log("Calling beofre LN-156" ,datatype(undefined));

 console.log("Calling beofre LN-156" ,datatype(false));

 console.log("Calling beofre LN-156" ,datatype(0));

 console.log("Calling beofre LN-156" ,datatype(null));

 console.log("Calling beofre LN-156" ,datatype(''));

 console.log("Calling beofre LN-156" ,datatype(NaN));

 console.log("Calling beofre LN-156",datatype("vishal"));

function datatype(input){
    return !input?"falsy":"truthy";
}

console.log("LN-152" ,datatype(undefined));

console.log("LN-153" ,datatype(false));

console.log("LN-154" ,datatype(0));

console.log("LN-155" ,datatype(null));

console.log("LN-156" ,datatype(''));

console.log("LN-157" ,datatype(NaN));

console.log("LN 158",datatype("vishal"));


console.log("Regular expression of z",z("vishal"));

console.log("Regular experession of x",x());

console.log("Regular expression of y",y());



let x= function(name){
    return name;
}
const y= function(name){
    return name;
}
var z= function (name){
    return name;
}

console.log(fun1(2, 9));
console.log(fun2(2, 9));
console.log(fun3(2, 9));

var fun1 = function name(a, b) {
  return a + b;
};

let fun2 = function (a, b) {
  return a + b;
};

const fun3 = function (a, b) {
  return a + b;
};

console.log(fun1(2, 9));
console.log(fun2(2, 9));
console.log(fun3(2, 9));