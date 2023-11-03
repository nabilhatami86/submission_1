const githubButton = document.getElementById("githubButton");
const linkedinButton = document.getElementById("linkedinButton");

githubButton.addEventListener("mouseover", function() {
    githubButton.style.backgroundColor = "#555";
});

githubButton.addEventListener("mouseout", function() {
    githubButton.style.backgroundColor = "#333";
});

linkedinButton.addEventListener("mouseover", function() {
    linkedinButton.style.backgroundColor = "#555";
});

linkedinButton.addEventListener("mouseout", function() {
    linkedinButton.style.backgroundColor = "#333";
});
