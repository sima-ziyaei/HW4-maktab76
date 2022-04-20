function getMonth(date){
    let month=date.getMonth();
    let months=["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    console.log(months[month]);
}
getMonth(new Date());