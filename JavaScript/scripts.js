let blocks = document.querySelectorAll(".block");

blocks.forEach(function (block) {
    let hiddenText = block.querySelector(".hidden");

    block.addEventListener("mouseover", function() {
        block.style.height = "720px";
        hiddenText.style.display = "block";
    });

    block.addEventListener("mouseout", function() {
        block.style.height = "470px";
        hiddenText.style.display = "none";
    });
});

/*Close and open popup*/
    function openPopup() {
    // Get the popup element
    let popup = document.getElementById("popup");

    // Show the popup
    popup.style.display = "block";
    }

    function closePopup() {
    // Get the popup element
    let popup = document.getElementById("popup");

    // Hide the popup
    popup.style.display = "none";
    }

//Hamburger
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("active");
});

