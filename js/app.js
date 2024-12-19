console.log("this is app js");
// ES6+ features
// 1.Arrow function

function fun(a,b,c){
    var name= "ram";
    var age= 45;
    console.log("hello world");
    console.log(a+b+c);
    console.log(this.name);
    console.log(this.age);
    
}
fun(10,20,30);

const myFun = (a, b, c) => {
    age = 50;
    console.log("hello Arrow function");
    console.log(a  + b +c);
    console.log(this.age);
    
};
myFun(10,20,30);

function test(sayHello){
    console.log("calling sayhello");
    sayHello();
}

test(() =>{
    console.log("this is hello function");
    
});

function fetchData(url,successCallback){
   
    console.log("fetching data");
    console.log(url);    
    successCallback();   
}
fetchData('http://',()=>{
    console.log("success");
    
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=> {
    console.log(response);
    
})
.catch((error)=> {
    console.log(error);
    
})

const fetching = (url)=>{
    console.log(url);   
}
const baseurl=`http://localhost:8080`
const userId="1234";
fetching(`${baseurl}/api/v1/${userId}/img`)

//object or array destructure

const employee = {ename:"raj",exp:25};
const friends=['amar','allu','arjun'];

// const f1=friends[0]
// const f2=friends[1]
// const f3=friends[2]
// console.log(f2);
const [f1,f2,f3]=friends;
console.log(f2);

const { ename, exp } = employee;
console.log(ename);
console.log(exp);

//Rest and Spread operators

const newFriends =[
    ...friends,
    "sachin",
    "rahul"
]
console.log(newFriends);

const emp ={
    ...employee,
    city:"pune",
    country:"India"
}
console.log(emp);