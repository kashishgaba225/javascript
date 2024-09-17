
// let str="kashish kash kashmir"
// let fre={}
// for(let i of str){
//     if(fre[i]){
//         fre[i]++
//     }else{
//         fre[i]=1
//     }
// }
// let arr= Object.entries(fre)
// let bag=''
// for(let i in arr){
//     if(arr[i][0]!=' '){
//         bag= bag + arr[i][0]+arr[i][1]
//     }
// }
// console.log(bag);

let obj={
    Name : "kashish",
    Class: "BCA",
    College: "Guru Nanak Khalsa College",
    age: 20,
    Roll_No: 33,

    obj2:{
        fname: "Mr Vicky Gaba",
        fage : 48,
        fphoneno:98989898,
        constobj3:{
            mname : "Mrs Meenu Gaba",
            mage: 42,
            mphoneno:90909090
        }
    }
 
}
obj.sister={
sname: "Shrishti Gaba",
sage:18,
sphoneno:8787878787
}
obj.bro={
    bname:"vansh",
    bage:14,
    bphone:5656565
}
console.log(obj);