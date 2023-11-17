const body = document.querySelector('body');
const bigImg = document.getElementById('middle_picx');
const blueThum = document.getElementById('blueThumb');
const silveThumb = document.getElementById('silveThumb');
const blackThumb = document.getElementById('blackThumb');
const likeSpan = document.getElementById('like_span')
const textTitle = document.getElementById('text_title')


// changing Maajor center image color
silveThumb.addEventListener("click", () => {
    const ele = silveThumb.getAttribute("src");
    bigImg.src = ele;
    likeSpan.style.color = "#0062be";
    textTitle.style.color = "#0062be";
})

blueThum.addEventListener("click", () => {
    const ele = blueThum.getAttribute("src");
    bigImg.src = ele;
    likeSpan.style.color = "#fff";
    textTitle.style.color = "#fff";
})

blackThumb.addEventListener("click", () => {
    const ele = blackThumb.getAttribute("src");
    bigImg.src = ele;
    likeSpan.style.color = "#0062be";
    textTitle.style.color = "#fff";
})

// change Backgrouud color
silveThumb.addEventListener("click", () => {
    return body.style.background = "linear-gradient(255deg, #41070b 0%, #7c0d01 100%)";
})

blueThum.addEventListener("click", () => {
    return body.style.background = "linear-gradient(255deg, #071f41 0%, #014c7c 100%)";
})

blackThumb.addEventListener("click", () => {
    return body.style.background = "linear-gradient(255deg, #181717 0%, #000000 100%)";
})