
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})



function files(index){
var data = `
../assets/male0001.png
../assets/male0002.png
../assets/male0003.png
../assets/male0004.png
../assets/male0005.png
../assets/male0006.png
../assets/male0007.png
../assets/male0008.png
../assets/male0009.png
../assets/male0010.png
../assets/male0011.png
../assets/male0012.png
../assets/male0013.png
../assets/male0014.png
../assets/male0015.png
../assets/male0016.png
../assets/male0017.png
../assets/male0018.png
../assets/male0019.png
../assets/male0020.png
../assets/male0021.png
../assets/male0022.png
../assets/male0023.png
../assets/male0024.png
../assets/male0025.png
../assets/male0026.png
../assets/male0027.png
../assets/male0028.png
../assets/male0029.png
../assets/male0030.png
../assets/male0031.png
../assets/male0032.png
../assets/male0033.png
../assets/male0034.png
../assets/male0035.png
../assets/male0036.png
../assets/male0037.png 
../assets/male0038.png
../assets/male0039.png
../assets/male0040.png
../assets/male0041.png
../assets/male0042.png
../assets/male0043.png
../assets/male0044.png
../assets/male0045.png

../assets/male0046.png
../assets/male0047.png
../assets/male0048.png  
../assets/male0049.png
../assets/male0050.png
../assets/male0051.png  
../assets/male0052.png  
../assets/male0053.png

../assets/male0054.png
../assets/male0055.png
../assets/male0056.png
../assets/male0057.png
../assets/male0058.png
../assets/male0059.png
../assets/male0060.png








































`;
return data.split('\n')[index];


}

const frameCount = 60;
const images = [];
const imageSeq = {
    frame:1
};


for(let i=0;i<frameCount;i++){
    const img = new Image();
    img.src = files(i);
    images.push(img);
}



gsap.to(imageSeq,{
    frame:frameCount -1,
    snap:"frame",
    ease:"none",
    scrollTrigger:{
        scrub:0.15,
        trigger:'.page1>canvas',
        start:'top top',
        end:'600% top',
        scroller:'main',
    },
    onUpdate:render
})

images[1].onload=render;




function render(){
    scaleImage(images[imageSeq.frame],context);
}

function scaleImage(img,ctx){
    var canvas = ctx.canvas ;
    var hRatio = canvas.width  / img.width    ;
    var vRatio =  canvas.height / img.height  ;
    var ratio  = Math.max ( hRatio, vRatio );
    var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
    var centerShift_y = ( canvas.height - img.height*ratio ) / 2;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img, 0,0, img.width, img.height,
                       centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);
}

scrollTrigger.create({
    trigger:".page1>canvas",
    start:"top top",
    pin:true,
    scroller:'main',
    end:"600% top"
})











gsap.to('.page2',{
    scrollTrigger:{
        trigger:'.page2',
        start:'top top',
        end:'bottom top',
        
        markers:true,
        pin:true,
        scroller:'main'

    }

})

gsap.to('.page3',{
    scrollTrigger:{
        trigger:'.page3',
        start:'top top',
        end:'bottom top',
        
        markers:true,
        pin:true,
        scroller:'main'

    }

})




gsap.to('.page4',{
    scrollTrigger:{
        trigger:'.page4',
        start:'top top',
        end:'bottom top',
        
        markers:true,
        pin:true,
        scroller:'main'

    }

})




