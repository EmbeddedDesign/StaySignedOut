var elements = document.getElementsByClassName("gb_ba");
for (var i = 0; i < elements.length; i++) {
    elements.innerHTML += elements[i].style.display = "none";
}