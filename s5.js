function deleteDuplicate(arr1, arr2){
    let arr3=arr1.concat(arr2);
    let arr4=[];
    arr3.forEach((element) => {
        if(!arr4.includes(element)){
            arr4.push(element);
        }
        
    });
    console.log(arr4);
    // let dup=arr3.filter((item,index) => {
    //     return arr3.indexOf(item)===index;
    // });
    // console.log(dup);
}
deleteDuplicate([3, 2, 4, 7], [6, 5, 2, 3, 7])