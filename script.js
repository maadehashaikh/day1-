// we are Goona learn some time here which is =>
// Fundamentals of javascript
// arrays and objects 
// functions rerturn
// async js

// array mai we can have different values like another array , string , numbers , booleans and functions etc 

// FOR EACH
var arr = ["hello",1,false,null,undefined,function(){console.log("I am a function")}];
arr.forEach(function(val){
  console.log(val + " Hello there !");
})

// MAP => map kia karta h jo bh hmara array hay us kay size ka he same blank array create kardyta h bus  
var newarray = [1,2,3,4,5];
newarray.map(function(val){
  console.log(val+" Hello there !");
})


// FILTER => jab bh condition yeh hoti h ky apky array say aik naya array banana h ya phr us say chota ya us kay barabar he aik array banana h to we use filter method 

let aray = [20,10,40,77];
let ans = aray.filter(function(val){
  if(val % 2 == 0 ){
    return true;
  }   // Remember one thing that true say apkay array mai new member add hoga  
                                 
  else{
    return false
  };
})
console.log(ans);


// FIND => array mai kuch bh dhoondny ka way hay find 
let ary = [20,10,40,77];
let result = aray.find(function(val){
  if(val > 40 ){
    return true;   // Remember one thing that true say apkay array mai new member add hoga  
  }                 
  else{
    return false
  };
})
console.log(result);




// Objects => Key Value pairs (value right side ki value ko bolty hain)
var obj = {
  name:"maadeha",
  age:30,
  job:"Yes",
}
Object.freeze(obj);
obj.job = "No";
// TO ACCESS 
console.log(obj.job);
console.log(obj["name"]);

// FUNCTION KI LENGTH KAISY NIKAL SKTY HAIN => FUN KAY PARAMETERS LENGTH OF 
// IF WE WANT KAY HMARAY OBJ KI VALUE CHANGE NA HO TO HM FREZZE USE KAR SKTY HAIN 
// LET'S MOVE TO RETURN THING => IS KA SIMPLEY MATLB YEH KAY AGAR FUNC LINE NUM 13 P CALL HUA H TO FUNC CHAHY KAHEN BH LIKHA HUA HO WOH JAHN P CALL HUA H WAHN PR RETURN HO JAY GA 


// ASYNC JS
// await ko use karny kay liyay apko kia chahiyay => (hm wait kar rhy hain) 
// many people ask that await kay liyay async chaiyay

async function Asynk() {
  var blob = await fetch(`https://randomuser.me/api/`);
  var ans = await  blob.json;
  console.log(ans.results[0].name);
}
Async();


// jab line by line code cahlta h to we say it is synchronous
// jo bh code async nature ka ho usay side stack mai bhej do and agly code ko chalao jo bh sync nature ka ho ,jb bh sara sync code chal jay to check karo kay async code complete hua ya nh and agar woh complete hua hua ho to usay main stack mai dal do and chala do 
// blob means a piece of code that is raw 
