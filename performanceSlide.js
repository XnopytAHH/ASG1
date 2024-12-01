function changeToVideo() {
    const mediaContainer = document.getElementById("container");
    const videoElement = document.createElement("video");
    videoElement.setAttribute("width", "640");
    videoElement.setAttribute("height", "360");
    videoElement.setAttribute("controls", "controls");
    const sourceMP4 = document.createElement("source");
    sourceMP4.setAttribute("src", "assets/strings.mp4");
    sourceMP4.setAttribute("type", "video/mp4");
    videoElement.appendChild(sourceMP4);
    mediaContainer.innerHTML = "";
    mediaContainer.appendChild(videoElement);
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
    const mediaContainer = document.getElementById("container2");
    const videoElement = document.createElement("video");
    videoElement.setAttribute("width", "640");
    videoElement.setAttribute("height", "360");
    videoElement.setAttribute("controls", "controls");
    const sourceMP4 = document.createElement("source");
    sourceMP4.setAttribute("src", "assets/goglobal.mp4");
    sourceMP4.setAttribute("type", "video/mp4");
    videoElement.appendChild(sourceMP4);
    mediaContainer.innerHTML = "";
    mediaContainer.appendChild(videoElement);
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
    const mediaContainer = document.getElementById("container3");
    const videoElement = document.createElement("video");
    videoElement.setAttribute("width", "640");
    videoElement.setAttribute("height", "360");
    videoElement.setAttribute("controls", "controls");
    const sourceMP4 = document.createElement("source");
    sourceMP4.setAttribute("src", "assets/worlddrumnight.mp4");
    sourceMP4.setAttribute("type", "video/mp4");
    videoElement.appendChild(sourceMP4);
    mediaContainer.innerHTML = "";
    mediaContainer.appendChild(videoElement);
}

function changeToImage3() {
    const mediaContainer = document.getElementById("container3");
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", "assets/photo1.jpg");
            imageElement.setAttribute("alt", "WDN Photo");

            // Replace the video with the image
            mediaContainer.innerHTML = "";
            mediaContainer.appendChild(imageElement);}