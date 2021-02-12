"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.querySelector(".overlay");
    var modals = document.querySelectorAll(".modal");
    var closeBtn = document.querySelectorAll("#closeCross");

    closeBtn.forEach( function (item) {
        item.addEventListener("click", function () {
            modals.forEach(function (item) {
                item.classList.remove("modal--active");
            })
            overlay.classList.remove("overlay--active");
        });
    });

    // map
    var pointer = document.querySelector("#point");
    var modalMap = document.querySelector("#modal-map");

    pointer.addEventListener("click", function () {
        modalMap.classList.add("modal--active");
        overlay.classList.add("overlay--active");
    });

    // puzzle
    var puzzleTriger = document.querySelector("#puzzle");
    var modalPuzzle = document.querySelector("#modal-puzzle");

    puzzleTriger.addEventListener("click", function () {
        modalPuzzle.classList.add("modal--active");
        overlay.classList.add("overlay--active");
    });

    // ecosystem
    var ecosystemTriger = document.querySelector("#ecosystem");
    var modalecosystem = document.querySelector("#modal-ecosystem");

    ecosystemTriger.addEventListener("click", function () {
        modalecosystem.classList.add("modal--active");
        overlay.classList.add("overlay--active");
    });

    // people
    var peopleTriger = document.querySelector("#people");
    var modalpeople = document.querySelector("#modal-people");

    peopleTriger.addEventListener("click", function () {
        modalpeople.classList.add("modal--active");
        overlay.classList.add("overlay--active");
    });


})


//puzzle - id
//ecosystem
//people