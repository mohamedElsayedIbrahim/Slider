var imgList = Array.from(document.querySelectorAll(".item img"));//NodeList

var pop = document.getElementById("popup");
var popView = document.querySelector("#popup .selectedElement");

var close = document.getElementById("close");
var next = document.getElementById("next");
var perv = document.getElementById("perv");

var currentIndex;

for (let index = 0; index < imgList.length; index++) {
    imgList[index].addEventListener('click', function(e){
        pop.style.display = 'flex';
        var imagSrc = e.target.src;
        popView.style.backgroundImage = `url(${imagSrc})`;
        currentIndex= imgList.indexOf(e.target);
        console.log(currentIndex)
    });
    
}


close.addEventListener('click',function(){
    pop.style.display = 'none';
});


next.addEventListener('click',function(){
    currentIndex = currentIndex + 1;
    
    if(currentIndex == imgList.length)
    {
        currentIndex = 0;
    }

    var imagSrc = imgList[currentIndex].src;
    console.log(imagSrc)
    popView.style.backgroundImage = `url(${imagSrc})`;
    
});

perv.addEventListener('click',function(){
    currentIndex = currentIndex - 1;
    
    if(currentIndex == -1)
    {
        currentIndex = imgList.length-1;
    }

    var imagSrc = imgList[currentIndex].src;
    console.log(imagSrc)
    popView.style.backgroundImage = `url(${imagSrc})`;
    
});


