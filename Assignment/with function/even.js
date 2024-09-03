function Evennumber(start, end){
    let bag= ''
    for(let i=start;i<=end;i++){
        if(i%2==0){
            bag= bag+ i+' '
        }
    }
    return bag
}
console.log(Evennumber(12,20));