//Ex.1

function exponent(n, a){
    if(a===0){
        return 1;
    }else{
        return n* exponent(n, a-1);
    }
}
alert(exponent(4,3));