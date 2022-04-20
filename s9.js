function hideEmail(email){
    let newEmail=email.split("@");
    let after=newEmail[1];
    let before=newEmail[0];
    let before2=before.split("");
   
    for(let i=0; i<5;i++){
        before2.pop();
    }
    let  newBefore=" ";
    for(let i of before2){
        newBefore=newBefore+ i;
    }
    let hide= newBefore + "...@" + after;
    console.log(hide);
}
hideEmail("sziyaei2000@gmail.com");