function round(arr){
    let newArr=arr.map(Math.round);
    let sum= newArr.reduce((a,b)=> a+b);
    console.log(sum);
}
round([13.1, 4.1, 15.5, 8.9])