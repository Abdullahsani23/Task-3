for(var i=2024; i<=2050; i++){
    var now =new Date([i])
    // console.log(now);
    var getSunday =now.toString()
    if(getSunday.slice(0,0+3)== "Sun"){
        document.write("Sunday will be on 1st Jan "+i +"<br>");
    }
}

for(var j=2051; j<=2080; j++){
var now1=new Date([j])
// console.log(now1);
var getSunday1=now1.toString()
if(getSunday1.slice(0,3)=="Sun"){
    console.log("Sunday will be on 1st Jan "+j +"<br>");
}
}