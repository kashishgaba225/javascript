
// function stringToArray(a) {
//     let arr = [];
//     let word = ''
//     for (let char of a) {
//         if (char != 0) {
//             word += char
//         }
//         else {
//             arr.push(word)
//             word = ''
//         }
//     }
//     arr.push(word)
//     return arr
// }

// const input = "Every developer likes to mix kubernetes and javascript";
// let arr = stringToArray(input)


// // function

// function result(arr) {
//     let bag = ''
//     for (let i = 0; i < arr.length; i++) {
//         let start = arr[i][0]
//         let end = arr[i][arr[i].length-1]
//         let len = arr[i].length-2;
        
//         if(len+2>3){
//             bag+=start+len+end+' '
//         }
//         else{
//             bag+=arr[i]+' '
//         }

//     }
//     return bag
// }


// console.log(result(arr));

// let n=10
// let result=Array(n).fill(0).map((v,i)=>{return i+1}).map((a)=>{return a*2}).join(' ')
// console.log(result);

// let arr=[
//     {name:"kashish" , product:"clothes"},
//     {name:"jannat" , product:"paints"},
//     {name:"saransh" , product:"clothes"},
//     {name:"seema" , product:"paints"},
//     {name:"harshad" , product:"clothes"},
//     {name:"sunil" , product:"paints"},
//     {name:"shrishti" , product:"clothes"},
//     {name:"meenu" , product:"clothes"},
//     {name:"komal" , product:"paints"},
//     {name:"kashish" , product:"clothes"}
// ]
// let result= arr.filter((a)=>{return a.product=="clothes"})
// console.log(result);

// let string="Every developer used to mix kubernetes and javascript"
// let result=string.split(' ').map((s)=>{
//     if(s.length<=3){
//         return s
//     }
//     else{
//         return s[0]+(s.length-2)+s[s.length-1]
//     }
// }).join(' ')

// console.log(result);







// class stack{
//     constructor(){
//         this.items=[];
//     }
//     push(element){
//         this.items.push(element);
//     }
//     pop(){
//         if(this.isEmpty())return"stack is empty"
//         return this.items.pop();
//     }
//     peek(){
//         if(this.isEmpty())return "stack is empty"
//         return this.items[this.items.length-1]

//     }
//     isEmpty(){
//         return this.items.length===0;
//     }
//     size(){
//         return this.items.length;
//     }
// }
// let Stack= new stack();
// Stack.push(1);
// Stack.push(2);
// Stack.push(5);
// Stack.push(6);
// Stack.push(9);
// Stack.push(5);
// console.log(Stack.pop());
// console.log(Stack.peek());


// class queue{
//     constructor(){
//         this.items=[];
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         if(this.isEmpty())return"queue is empty";
//         return this.items.shift();
//     }
//     front(){
//         if(this.isEmpty())return"queue is empty";
//         return this.items[0];
//     }
//     isEmpty(){
//         return this.items.length===0;
//     }
//     size(){
//         return this.items.length;
//     }
// }
// let Queue= new queue();
// Queue.enqueue(6);
// Queue.enqueue(8);
// Queue.enqueue(2);
// Queue.enqueue(0);
// Queue.enqueue(7);
// console.log(Queue.size());
// Queue.enqueue(1);
// Queue.enqueue(0);
// console.log(Queue.front());
// Queue.enqueue(0);
// console.log(Queue.dequeue());
// Queue.enqueue(0);
// console.log(Queue.front());
// Queue.enqueue(0);
// Queue.enqueue(0);
// console.log(Queue.dequeue());
// console.log(Queue.size());
// console.log(Queue.dequeue());
// console.log(Queue.size());

// function randompass(m){
//  let n="qwertyuiopasdfghjklzxcvbnm123456789!@#$%^&*("
//  let bag=''
//  for(let i=0;i<m;i++){
//     let randomindex=Math.floor(Math.random()*n.length)
//     bag=bag+n[randomindex]
//  }
//  return bag
// }
// setInterval(()=>{
//     console.log(randompass(50));
// },100)

let str="kashish harshad saransh"
let arr=str.split(' ')
let bag='';
for(let i=0;i<arr.length;i++){
    bag=bag+arr[i][0].toUpperCase()
    for(let j=1;j<arr[i].length;j++){
        bag= bag+arr[i][j].toLowerCase()
    }
    bag= bag+' '
}
console.log(bag);