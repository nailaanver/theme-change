

function changeTheam() {
    let section = document.getElementById("mySection");
    let heading = document.getElementById("h");
    let button = document.getElementById("b");

    // Toggle between dark and light mode
    if (section.style.backgroundColor === "black" || section.style.backgroundColor === "") {
        // Light mode
        section.style.backgroundColor = "white";
        heading.style.color = "black";
        button.style.background = "black";
        button.style.color = "white";
    } else {
        // Dark mode
        section.style.backgroundColor = "black";
        heading.style.color = "white";
        button.style.background = "teal";
        button.style.color = "white";
    }
}
