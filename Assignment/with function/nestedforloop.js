// 1. Write a Java program to print the following pattern using nested
// loops: *****
// *****
// *****
// *****
// *****
// function pattern(row,column){
//     for(let i=0;i<row;i++){
//         let bag=''
//         for(let j=0;j<column;j++){
//             bag= bag+'* ';
           
//         }
//         console.log(bag);
//     }
// }
// pattern(5,5)

// 2.Create a program to print a right-angle triangle pattern:
// *
// **
// ***
// ****
// *****
// function patt(r,c){
//     for(let i=0;i<=r;i++){
//         let bag=''
//         for(let j=1;j<=i;j++){
//             bag+='*'
//         }
//         console.log(bag);
//     }
// }
// patt(6,6)

// 3.Write a program to print an inverted right-angle triangle:
// *****
// ****
// ***
// **
// *
// function patt(r,c){
//     for(let i=0;i<=r;i++){
//         let bag=''
//         for(let j=i;j<c;j++){
//             bag= bag+'*'
//         }
//         console.log(bag);
//     }
// }
// patt(5,5)

// 4.Generate a pattern of numbers:
// 1
// 12
// 123
// 1234
// 12345
// function patt(r,c){
//     for(let i=1;i<=r;i++){
//         let bag=''
//         for(let j=1;j<=i;j++){
//             bag+=j
//         }
//         console.log(bag);
//     }
// }
// patt(5,5)

// 6.Write a Java program to print the following pattern:
// 1
// 22
// 333
// 4444
// 55555
// function patt(r,c){
//     for(let i=1;i<=r;i++){
//         let bag=''
//         for(let j=1;j<=i;j++){
//             bag= bag+i
//         }
//         console.log(bag);
//     }
// }
// patt(5,5)

function patt(r){
    for(let i=1;i<=r;i++){
        let space='';
        for(let j=1;j<=r-i;j++){
            space= space+'   '
        }
        let start='';
    
        for(let k=0;k<i*2-1;k++){
            start=start+' * '
        }
        console.log(space,start);
    }
}
patt(5)