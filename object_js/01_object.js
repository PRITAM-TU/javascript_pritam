console.log("pritam tung ");
const mykey=Symbol("key1");
const object={
    name:"pritan_tung",
    roll_number:17600123062,
    email: "pritamgoogle@gmail.com",
    age:21,
    location:"jaiopur",
   [ mykey]:"bala"

}
// console.log(object.email);
// console.log(object["email"]);
object.name="ritam tung ";
// console.log(object);
// Object.freeze(object);// not change in object entier data 
// object.name="ritam sing  ";

// console.log(object);
// console.log(typeof object.mykey);
 object.greeting=function(){
    console.log(`my nae is `);


 }
  object.greetingTwo=function(){
    console.log(`my nae is ${this.name}`);


 }
console.log(object.greeting());
console.log(object.greetingTwo());
