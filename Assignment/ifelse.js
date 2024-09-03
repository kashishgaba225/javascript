//1.Writeaprogramthatdetermineswhetheragivennumberispositiveor
// negative?
//  let a= -10;
// if(a<1){
//     console.log("no.is negative");
// }else{
//     console.log("no. is positive");
// }

// 2.Writeaprogramthatchecksifanumberisevenorodd.
// let a= 5;
// if(a%2==0){
//     console.log("no. is even");
// }else{
//     console.log("no. is odd");
// }

// 3.Writeaprogramtodeterminethegreateroftwonumbers
// let a=67;
// let b=54;
// if(a>b){
//     console.log("a is greater");
// }else{
//     console.log("b is greater");
// }

// 4.Supposeweneedtoassigndifferentgradestostudentsbasedontheir
//  Ifastudentscoresabove91-100,assigngradeA.
//  Ifastudentscoresabove81-90,assigngradeB.
//  Ifastudentscoresabove71-80,assigngradeC.
//  Ifastudentscoresabove61-60,assigngradeC.
//  Otherwisefail
// let marks = 53;
// if(marks>=91 && marks<=100){
//     console.log("grade is A");
// }
// else if(marks>=81 && marks<=90){
//     console.log("grade is B");
// }
// else if(marks>=71 && marks<=80){
//     console.log("grade is c");
// }
// else if(marks>=61 && marks<=70){
//     console.log("grade is D");
// }
// else{
//     console.log("fail");
// }

// 5.Writeaprogramthatcalculatestheticketpricebasedonagewiththe
// followingconditions:agebelow12payaticketpriceof5,agebelow18pay
// aticketpriceof10,agebelow60payaticketpriceof20,ageover60playa
// ticketpriceof15.
// let age = 30;
// if(age<12 && age>=1){
//     console.log("ticket price of 5");
// }
// else if(age<18 && age>=12){
//     console.log("ticket price of 10");
// }
// else if(age<60 && age>=18 ){
//     console.log("ticket price of 20");
// }
// else  {
//        console.log("ticket price of 15");
// }

// 6.Writeaprogramthatdeterminesifayearisaleapyear.
// let year= 2004
// if(year%4==0 && year!=100 || year %400==0){
//     console.log("leap year");
// }
// else{
//     console.log("not a leap year");
// }

// 7.Writeaprogramthatcalculatesadiscountbasedonthepurchase
// amount.Pricesequalorover100discounthaveadiscountof20.Prices
// equalorover50haveadiscountof10.Otherwisediscountis0
// let price =54;
// if(price>=100){
//     let dic = price/100*20;
//     console.log(`discount of 20 % of value ${price-dic}`);
// }
// else if(price>=50 && price<100){
//     let dic= price/100*10;
//     console.log(`discount of 10% of value  ${price-dic} `);
// }
// else{
//     console.log(`discount of 0% of value ${price-0}`);
// }
// 8.Writeaprogramthatgreetstheuserbasedonthetimeofday.Display
// goodmorning,goodafternoonorgoodeveningbasedonthetimeofday
// whenyourunthecode.
// let time= 3;
// if(time>4 && time<12){
//     console.log("good morning");
// }
// else if(time==12){
//     console.log("good afternoon");
// }
// else if(time>12 && time<20){
//     console.log("good evening");
// }
// else if(time>=20 && time<=24){
//     console.log("good night");
// }
// else{
//     console.log("good night");
// }
// Problem
// let salary=5000;
// let salary_type= "";
//  let Residence="India";
//  let age= 17;
//  let id= "Adhar/Driving_lisence";

//  if(salary>50000 && salary_type==" government" && Residence== "India" && age<40){
//     console.log("Loan of Rs 50 Lakh");
//  }
//  else if(salary>50000 && salary_type== "private" && Residence== "India" && age<50){
//     console.log("Loan of Rs 30 Lakh");
//  }
//  else if(salary>30000  && Residence== "India" && age>30 && age<40 ){
//     if(salary_type== "government"){
//         console.log("Loan for Rs 20 Lakh");
//     }else{
//         console.log("Loan for Rs 25 Lakh");
//     }
//  }
//  else{
//     console.log("Not Applicable For Loan");
//  }

// let salary=55000;
// let salary_type= "private";
// let age= 39;
// let id="adharcard";
// let Residence="india";

// if(salary>50000){
//     if(salary_type=="government"){
//         if(age<40){
//             if(Residence=="india"){
//                 if(id== "adhar"){
//                     console.log("Loan of Rs 50 Lakh");
//                 }
//             }
//         }
//     }
// }
// else if(salary>50000){
//     if(salary_type=="private"){
//         if(id=="adharcard"){
//             if(Residence="india"){
//                 if(age<50){
//                     console.log("Loan of Rs 30 Lakh");
//                 }
//             }
//         }
//     }
// }
//  if(salary>30000){
//     if(age>30 && age<40){
//         if(Residence=="india"){
//             if(id=="adharcard"){
//                 if(salary_type=="private"){
//                     console.log("Loan of Rs 20 Lakh");
//                 }else{
//                     console.log("Loan of Rs 25 Lakh");
//                 }
//             }
//         }
//     }
// }
// else{
//     console.log("Not Applicable");
// }
