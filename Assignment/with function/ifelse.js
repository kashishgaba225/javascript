// 1.Writeaprogramthatdetermineswhetheragivennumberispositiveor
// negative.function pos(n){
//     if(n>0){
//         return "no.is positive"
//     }else{
//          return "no. is negative"
//     }
// }
// console.log(pos(-2));

// 2.Writeaprogramthatchecksifanumberisevenorodd.
// function Evennumber(n){
//     if(n%2==0){
//         return "no.is even"
//     }else{
//         return "no. is odd"
//     }
// }
// console.log(Evennumber(5));

// 3.Writeaprogramtodeterminethegreateroftwonumbers.
// function big(a,b){
//     if(a>b){
//         return `big no. is ${a}`
//     }else{
//         return `big no. is ${b}`
//     }
// }
// console.log(big(2,5));

// 4.Supposeweneedtoassigndifferentgradestostudentsbasedontheir
//  Ifastudentscoresabove91-100,assigngradeA.
//  Ifastudentscoresabove81-90,assigngradeB.
//  Ifastudentscoresabove71-80,assigngradeC.
//  Ifastudentscoresabove61-60,assigngradeC.
//  Otherwisefail
// function result(n){
//     if(n>=91 && n<=100){
//       return "grade is A"
//     }else if(n>=81 && n<=90){
//       return"grade is B"
//     }else if(n>=71 && n<=80){
//         return "grade is C"
//     }else if(n>=61 && n<=70){
//         return "grade is D"
//     }else{
//         return "false"
//     }
    
// }
// console.log(result(72));

//  5.Writeaprogramthatcalculatestheticketpricebasedonagewiththe
// followingconditions:agebelow12payaticketpriceof5,agebelow18pay
// aticketpriceof10,agebelow60payaticketpriceof20,ageover60playa
// ticketpriceof15.
// function price(age){
//     if(age<12 && age<1){
//         return "ticket price of Rs 5"
//     }else if(age<18 && age>=12){
//         return "ticket price of Rs 10"
//     }else if(age<60 && age>=18){
//         return "ticket price of Rs 20"
//     }else{
//         return "ticket price of 15"
//     }
// }
// console.log(price(53));

// // 6.Writeaprogramthatdeterminesifayearisaleapyear
// function leap(year){
//     if((year%4==0 || year!=100) && year %400==0){
//         return "year is a leap year"
//     }else{
//         return "this is not a leap year"
//     }
// }
// console.log(leap(2000));

// 7.riteaprogramthatcalculatesadiscountbasedonthepurchase
// amount.Pricesequalorover100discounthaveadiscountof20.Prices
// equalorover50haveadiscountof10.Otherwisediscountis0
// function purchase(price){
//     if(price>=100){
//         let dis=price/100 *20;
//         return `discount is on your purchase is 20 percent ${price-dis}`
//     }else if(price>=50 && price<100){
//         let dis=price/100 *10;
//         return `discount is on your purchase is 10 percent ${price- dis}`
//     }else {
//         return "discount is on your purchase is 0 percemt"
//     }
// }
// console.log(purchase(60));

// 8.Writeaprogramthatgreetstheuserbasedonthetimeofday.Display
// goodmorning,goodafternoonorgoodeveningbasedonthetimeofday
// whenyourunthecode.
// function day(time){
//     if(time >24){
//         return "this time is not applicable"
//     }
//     else if(time<=4 && time<=11){
//         return "good morning"
//     }else if(time<=12 && time<=16){
//         return "good afternoon"
//     }else if(time>16 && time <=19){
//         return "good evening"
//     }else {
//         return "good night"
//     }
// }
// console.log(day(24));

// 9.WriteaprogramthatcalculatestheBodyMassIndex(BMI)and
// categorizesit.TheformulaforBMIis:weight/(height*height).
// function Bmi(weight,height){
//     let bmi=weight/(height*height)
//     if(bmi>=30){
//         return "obesity"
//     }
//     else if(bmi>=25 && bmi<=29.9){
//         return "heathy weight"
//     }else if(bmi>=18.5 && bmi<=24.9){
//         return "heathy weight"
//     }else{
//         return "underweight"
//     }
// }
// console.log(Bmi(52,1.554));

// 10.Writeasimplenumberguessinggame.Provideasecretnumberanda
// guess.Basedonthosenumbersgiveplayerscluesiftheirguessishigher,
// lowerorcorrect.
