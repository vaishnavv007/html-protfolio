// Object to store original colors
var originalColors = {
    bodyBackgroundColor: "",
    carBackgroundColor: [],
    carTextColor: [],
    h1Color: [],
    h2Color: [],
    tableTextColor: []
};

function toggleColor() {
    // If the original colors are not stored, store them
    if (originalColors.bodyBackgroundColor === "") {
        originalColors.bodyBackgroundColor = document.body.style.backgroundColor || window.getComputedStyle(document.body).backgroundColor;

        var carElements = document.getElementsByClassName("car");
        for (var i = 0; i < carElements.length; i++) {
            originalColors.carBackgroundColor.push(carElements[i].style.backgroundColor || window.getComputedStyle(carElements[i]).backgroundColor);
            originalColors.carTextColor.push(carElements[i].style.color || window.getComputedStyle(carElements[i]).color);
        }

        var h1Elements = document.getElementsByTagName("h1");
        for (var i = 0; i < h1Elements.length; i++) {
            originalColors.h1Color.push(h1Elements[i].style.color || window.getComputedStyle(h1Elements[i]).color);
        }

        var h2Elements = document.getElementsByTagName("h2");
        for (var i = 0; i < h2Elements.length; i++) {
            originalColors.h2Color.push(h2Elements[i].style.color || window.getComputedStyle(h2Elements[i]).color);
        }

        var tableElements = document.querySelectorAll("table, th, td");
        for (var i = 0; i < tableElements.length; i++) {
            originalColors.tableTextColor.push(tableElements[i].style.color || window.getComputedStyle(tableElements[i]).color);
        }

        // Apply the new colors
        document.body.style.backgroundColor = "#330000";
        for (var i = 0; i < carElements.length; i++) {
            carElements[i].style.backgroundColor = "#330000";
            carElements[i].style.color = "white";
        }

        for (var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.color = "white";
        }

        for (var i = 0; i < h2Elements.length; i++) {
            h2Elements[i].style.color = "white";
        }

        for (var i = 0; i < tableElements.length; i++) {
            tableElements[i].style.color = "white";
        }
    } else {
        // Toggle back to original colors
        document.body.style.backgroundColor = originalColors.bodyBackgroundColor;

        var carElements = document.getElementsByClassName("car");
        for (var i = 0; i < carElements.length; i++) {
            carElements[i].style.backgroundColor = originalColors.carBackgroundColor[i];
            carElements[i].style.color = originalColors.carTextColor[i];
        }

        var h1Elements = document.getElementsByTagName("h1");
        for (var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.color = originalColors.h1Color[i];
        }

        var h2Elements = document.getElementsByTagName("h2");
        for (var i = 0; i < h2Elements.length; i++) {
            h2Elements[i].style.color = originalColors.h2Color[i];
        }

        var tableElements = document.querySelectorAll("table, th, td");
        for (var i = 0; i < tableElements.length; i++) {
            tableElements[i].style.color = originalColors.tableTextColor[i];
        }

        // Reset the original colors storage
        originalColors.bodyBackgroundColor = "";
        originalColors.carBackgroundColor = [];
        originalColors.carTextColor = [];
        originalColors.h1Color = [];
        originalColors.h2Color = [];
        originalColors.tableTextColor = [];
    }
}

// Add event listener to the button
document.getElementById("toggleButton").addEventListener("click", toggleColor);