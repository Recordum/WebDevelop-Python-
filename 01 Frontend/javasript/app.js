const queryID = document.querySelector("#qID")
const queryClass = document.querySelector(".qClass")
const queryAll = document.querySelectorAll(".qClass")


function handleTitleClick() {
    queryID.style.color = "blue";
}

function handleMouseEnter() {
    queryClass.style.color = "blue";
}

function handleMouseLeave() {
    queryClass.innerText = "Mouse was visited"
}

function handleWindowResize() {
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("No WIFI");
}


function handleWindowOnline() {
    alert("ALL GOOD")
}

queryID.style.color = "red";
queryID.addEventListener("click", handleTitleClick);
queryClass.addEventListener("mouseenter", handleMouseEnter);
queryClass.addEventListener("mouseleave", handleMouseLeave);



window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

