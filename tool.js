
function startSlider() {
    var slider = document.getElementById('searchNew');
    slider.classList.add('animate__fadeInRight', 'upKXGe', 'vUSp5d');
    slider.classList.remove('animate__fadeOutRight');
}

function endSlider() {
    var slider = document.getElementById('searchNew');
    slider.classList.add('animate__fadeOutRight');
    slider.classList.remove('animate__fadeInRight');
}
const input = document.getElementById("inputSearch");
const clearInput = document.getElementById("clearInput");
clearInput.style.display = 'none';
clearInput.addEventListener("click", function () {
    input.value = ""
});
input.addEventListener("input", function () {
    if(input?.value?.length === 0) {
        clearInput.style.display = 'none';
    }else{
        clearInput.style.display = 'block';
    }
});


window.addEventListener('resize', function() {
    if(document.body.clientWidth > 765) {
        navMobile.style.display = 'none'
        closeTool.style.display = 'none'
        openTool.style.display = 'none'
    } else {
        openTool.style.display = 'block'
    }
});

const openTool = document.getElementById("openTool");
const navMobile = document.getElementById("navMobile");
const closeTool = document.getElementById("closeTool");

openTool.addEventListener("click", function () {
    closeTool.style.display = 'block'
    navMobile.style.display = 'block'
    navMobile.classList.add('animate__fadeInLeft');
    navMobile.classList.remove('animate__fadeOutLeft');
    openTool.style.display = 'none'
});

closeTool.addEventListener("click", function () {
    
    navMobile.classList.add('animate__fadeOutLeft');
    navMobile.classList.remove('animate__fadeInLeft');
    openTool.style.display = 'block'
    closeTool.style.display = 'none'
});