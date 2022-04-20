function curDay( char){
     let today=new Date();
     let day=today.getDate();
     let month=today.getMonth();
     let year=today.getFullYear();
     today=day + char + month + char + year;
     console.log(today);
    

}
curDay("/");
curDay("-");