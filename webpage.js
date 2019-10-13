'use strict';

document.getElementById("hamburger").onclick = () => {
  let nav = document.getElementById("header-nav");
  if (nav.classList.contains("expanded")) {
    nav.classList.remove("expanded");
  } else {
    nav.classList.add("expanded");
  }
};

fetch("footer.html")
    .then(response => {
	return response.text()
    })
    .then(data => {
	document.querySelector("footer").innerHTML = data;
    });
