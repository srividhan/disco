setTimeout(fun1,0);
var a=0;
function fun1(){
    if(a==0){
        document.getElementById("a").innerHTML="Never";
        document.getElementById("a").style="margin-left:42%;";
        a=1;
        setTimeout(fun1,1000);
    }
    else if(a==1){
        document.getElementById("a").innerHTML="Give";
        document.getElementById("a").style="margin-left:43%;";
        a=2;
        setTimeout(fun1,1000);
    }
    else if(a==2){
        document.getElementById("a").innerHTML="Up";
        document.getElementById("a").style="margin-left:46%;";
        a=0;
        setTimeout(fun1,1000);
    }
}
