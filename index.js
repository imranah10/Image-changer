var arrImg=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
var imgstyle=[]

var i=0
var slider=()=>{
    var im1=document.getElementById('im1');
    im1.src='images/'+arrImg[i];
    i++;
    if(i==arrImg.length){
        i=0;
    }
}
setInterval(slider,1000);