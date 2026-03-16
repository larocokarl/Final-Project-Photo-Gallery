function upDate(previewPic) {
    console.log("upDate triggered for:", previewPic.alt);
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
    console.log("unDo triggered");
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = "Hover over or focus an image below to display here.";
    imageDiv.style.backgroundImage = "none";
}


function addTabFocus() {
    console.log("Adding tabindex to all images");
    const imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("tabindex", "0");
    }
}

window.onload = addTabFocus;
