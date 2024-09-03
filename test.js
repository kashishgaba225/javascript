function grade(marks){
    if(marks>=90 && marks <=100){
        return`grade is A`
    }else if(marks>=80 && marks<90 ){
        return`grade is B`
    }else if(marks>=70 && marks<80){
        return`grade is C`
    }else if(marks >=60 && marks <70){
        return`grade is D`
    }else{
        return`fail`
    }
}
console.log(grade(65));