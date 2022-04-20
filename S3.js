function upCase(str){
    let array=str.split("");
    array[0]=array[0].toUpperCase();
    for(let i=0;i<array.length; i++){
        if(array[i]==' '){
            array[i+1]=array[i+1].toUpperCase();
        }
    }
    console.log(array);
}
upCase("my name is sima")