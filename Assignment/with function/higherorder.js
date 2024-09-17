// 1let arr=[1,2,3,4,5]

// let squareval=arr.map((a)=>{return a*a})

// console.log(squareval);

//2 let arr=[1,-4,12,0,-3,29,-150]

// let pos=arr.filter((a)=>{return a>=0}).reduce((s,a)=>{return s+a})
// console.log(pos);

// 3let arr=[12,46,32,64]

// let mean=arr.reduce((s,a)=>{return (s+a)})
// console.log(mean/arr.length);

// 4let arr=["Kashish","harshad","kash"]
// let bag=''
// let cap=arr.map((a)=>{return bag+=a[0]})


// console.log(bag);

// 5let arr=[
//     {nam:"kashish" , age:20},
//     {nam:"harsh", age:23},
//     {nam:"saransh",age:19},
//     {nam:"ravi",age:27}
// ]

// let arr3=arr.map((a)=>{return a.age})
// console.log([Math.min(...arr3),Math.min(...arr3),Math.max(...arr3)-Math.min(...arr3)]);

// 5let arr=[
//     {nam:"kashish", score:[90,85,92]},
//     {nam:"harshad",score:[100,100,100]},
//     {nam:"saransh",score:[75,80,85]},
//     {nam:"ravi",score:[90,95,85]}
// ]
// let sum=arr.map((std)=>{
//     let sum= std.score.reduce((s,a)=>{return s+a})
//     return {Name:std.nam,SumScore:sum/3}}).filter((b)=>{return b.SumScore>90})
// console.log(sum);


// 7.let n=6
// let result=Array(n).fill(0).map((a,i)=>i+1).reduce((m,a)=>m*a)
// console.log(result);

// const products=[
//     {name:"product1",price:20,category:"electronics"},
//     {name:"product2",price:30,category:"clothes"},
//     {name:"product3",price:40,category:"electronics"},
//     {name:"product4",price:50,category:"clothes"},
//     {name:"product5",price:60,category:"clothes"},
//     {name:"product6",price:70,category:"electronics"},
//     {name:"product7",price:80,category:"clothes"},
//     {name:"product8",price:90,category:"electronics"}
// ]
// let cat=products.filter((a,)=>{return a.category=="clothes"})
// let cal=cat.reduce((s,a)=>  s+a.price,0)
// console.log({category: cat[0].category, TotalPrice:cal/cat.length});
// let cat2=products.filter((b)=>{return b.category=="electronics"})
// let cal2=cat.reduce((s,b)=>s+b.price,0)
// console.log({category:cat2[0].category,TotalPrice:cal2/cat.length});


// let ar=[1,2,3,4,5]
// let result=ar.map((a)=>{return a*a})
// console.log(result);

// const input=[1,-4,12,0,-3,29,-150]
// let res=input.filter((a)=>{return a>=0}).reduce((s,a)=>{return s+a})
// console.log(res);

// let arr=[12,46,32,64]

// let result=arr.reduce((s,a)=>{return s+a})
// console.log(result/arr.length);

// let arr="kashish harsh saransh"
// let result=arr.split(" ")
// let bag=''
// let ar=result.map((a)=>{return bag+a[0]}).join("")
// console.log(ar);

// let arr=[
//     {name:"harsh",age:23},
//     {name:"kashish", age:20},
//     {name:"saransh",age:21}
// ]
// let res=arr.map((a)=>{return a.age})
// console.log(Math.max(...res),Math.min(...res),Math.max(...res)-Math.min(...res));


// let n=5
// let fact=Array(n).fill(0).map((v,i)=>{return i+1}).reduce((m,a)=>{return m*a})

// console.log(fact);

// let string="racecar"
// let res=string.split(' ')
// let rese=res.reverse((a)=>{return a})
// let result=rese.map((a)=>{return `String is palindrome ${a==rese} `} )
// console.log(result);

function a(){
    a=10
    function b(){
        b=20
        return b;
    }
    return `values are ${a} ${b()}`;
}
console.log(a());