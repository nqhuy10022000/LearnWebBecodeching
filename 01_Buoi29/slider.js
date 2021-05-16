const slidersContainer = document.getElementById("list-sliders");
const listSliders = slidersContainer.getElementsByClassName("slider-item");
let indexSlider = 0;

renderSlider(0,true);

$(document).ready(function() {
    $('#icon-right').click(()=> {
        if(indexSlider < listSliders.length - 1) {
            indexSlider +=1;
        } else {
            indexSlider = 0;
            renderSlider(indexSlider,true);
            return;
        }
        renderSlider(indexSlider);
    });
    $('#icon-left').click(()=> {
        if(indexSlider > 0) {
            indexSlider -=1;
        } else {
            indexSlider = listSliders.length - 1;
            renderSlider(indexSlider,true);
            return;
        }
        renderSlider(indexSlider);
    });
});

function intervalSlider() {
    let time = $("#slider-container").attr("data-time");
    let isInterVal = $("#slider-container").attr("data-interval");
    if(isInterVal ==="true") {
        clearInterval(subInterval);
        subInterval = setInterval(()=> {
            
        })
    }
}

function renderSlider(indexSlider = 0,isReset = false) {
    for(let i=0; i<listSliders.length; i++) {
        listSliders[i].style.transform = `translateX(${(i-indexSlider)*100}%)`
        if(isReset) {
            listSliders[i].style.transition ='none';
        } else {
            listSliders[i].style.transition ='all 1s ease-in-out';
        }
    }
}