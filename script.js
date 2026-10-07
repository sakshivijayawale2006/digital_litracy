function getLanguage() {
    return localStorage.getItem("digitalDishaLanguage") || "en";
}


function changeLanguage(language) {

    localStorage.setItem("digitalDishaLanguage", language);

    applyLanguage();
}


function applyLanguage() {

    const language = getLanguage();

    document.documentElement.lang = language === "mr" ? "mr" : "en";


    const elements = document.querySelectorAll("[data-en][data-mr]");


    elements.forEach(function(element) {

        if (language === "mr") {

            element.textContent = element.getAttribute("data-mr");

        } else {

            element.textContent = element.getAttribute("data-en");

        }

    });


    updateLanguageButtons();
}


function updateLanguageButtons() {

    const language = getLanguage();

    const englishButtons =
        document.querySelectorAll("#englishBtn");

    const marathiButtons =
        document.querySelectorAll("#marathiBtn");


    englishButtons.forEach(function(button) {

        button.classList.remove("selected");

        if (language === "en") {
            button.classList.add("selected");
        }

    });


    marathiButtons.forEach(function(button) {

        button.classList.remove("selected");

        if (language === "mr") {
            button.classList.add("selected");
        }

    });

}


document.addEventListener("DOMContentLoaded", function() {

    applyLanguage();

});