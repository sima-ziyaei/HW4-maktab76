//Ex.4

function deleteFalse(arr){
    for(let i=0; i<arr.length; i++){
        if(!arr[i]){
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}
deleteFalse([0, false, 'sima', undefined, 'name', NaN, null, 1])