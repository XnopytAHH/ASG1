function changeToVideo() {
    var vidcontainer = document.getElementById("container");
    var iframe = document.createElement("iframe");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", "https://www.youtube.com/embed/XfNvCVUvZGI?si=bdoGHkFWHdWE-4oI");
    iframe.setAttribute("allowfullscreen", "true");
    vidcontainer.innerHTML = "";
    vidcontainer.appendChild(iframe);
}

function changeToImage() {
    const mediaContainer = document.getElementById("container");
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", "assets/photo5.jpg");
            imageElement.setAttribute("alt", "Strings picture");

            // Replace the video with the image
            mediaContainer.innerHTML = "";
            mediaContainer.appendChild(imageElement);
}

function changeToVideo2() {
    var vidcontainer = document.getElementById("container2");
    var iframe = document.createElement("iframe");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", "https://www.youtube.com/embed/pwnnMLAm7Jc?si=k1itJhDnTGhaNsLb");
    iframe.setAttribute("allowfullscreen", "true");
    vidcontainer.innerHTML = "";
    vidcontainer.appendChild(iframe);
}

function changeToImage2() {
    const mediaContainer = document.getElementById("container2");
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", "assets/photo4.jpg");
            imageElement.setAttribute("alt", "GGF Photo");

            // Replace the video with the image
            mediaContainer.innerHTML = "";
            mediaContainer.appendChild(imageElement);}

function changeToVideo3() {
    var vidcontainer = document.getElementById("container3");
    var iframe = document.createElement("iframe");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", "https://www.youtube.com/embed/Ty8PPMIFmW0?si=lm1kufnEI8ECrfnY");
    iframe.setAttribute("allowfullscreen", "true");
    vidcontainer.innerHTML = "";
    vidcontainer.appendChild(iframe);
}

function changeToImage3() {
    const mediaContainer = document.getElementById("container3");
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", "assets/photo1.jpg");
            imageElement.setAttribute("alt", "WDN Photo");

            // Replace the video with the image
            mediaContainer.innerHTML = "";
            mediaContainer.appendChild(imageElement);}

window.open('google.com');