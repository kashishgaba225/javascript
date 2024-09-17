//1 let arr=[1,2,3,4,5]
// let arr2=[]
// for(let i=0;i<arr.length;i++){
//     arr2=arr[i]*arr[i]
// console.log(arr2);

// }

// 2let arr=[1,-4,12,0,-3,29,-150]
// let bag=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=0){
//         bag= bag+arr[i]

//     }
// }
// console.log(bag);

// let arr=[12,46,32,64]
// let bag=0
// for(let i=0;i<arr.length;i++){
// bag= bag+ arr[i]
// }
// console.log(bag/arr.length);

// let arr=["kashish","love","harshad"]
// let bag=''
// for(let i=0;i<arr.length;i++){
//     bag=  bag+arr[i][0]
// }
// console.log(bag);

// let arr=[
//     {nam:"kashish", age:20},
//     {nam:"harsh",age:23},
//     {nam:"saransh",age:19},
//     {nam:"jannat",age:18}
// ]
// let min=arr[0].age;
// let max=arr[0].age
// let bag=0;
// let arr2=[]
// for(let i=0;i<arr.length;i++){
//     if(min>arr[i].age){
//         min=arr[i].age
//     }
//     if(max<arr[i].age){
//         max= arr[i].age
//     }
// }
// bag=max- min
// arr2=bag
// console.log(min,max,arr2);

// let n=6
// let bag=1;
// for(let i=n;i>=1;i--){
// bag=bag*i
// }
// console.log(bag);

let arr=[
    {nam:"saransh", score:[90,85,92]},
    {nam:"harshad",score:[75,80,85]},
    {nam:"kashish",score:[99,95,100]},
    {nam:"jannat",score:[85,92,85]}
]


let newarr=[];
let avg=0;
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr[i].score.length;j++){
        sum= sum+ arr[i].score[j]/2
       
    }
    newarr.push({Name:arr[i].nam,SumScore:sum})
}

let max=newarr[0].SumScore;
for(let i=0;i<newarr.length;i++){
    if(max<newarr[i].SumScore){
        max= newarr[i]
    }

}
console.log(max);