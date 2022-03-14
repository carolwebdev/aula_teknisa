function preRender(){
    let countVisibleCards=getCountVisibleCards();
    updateResults(countVisibleCards);
}

function getCountVisibleCards(){
    return Array.from(document.getElementsByClassName("card")).filter((card) => !card.getElementsByClassName.display || card.getElementsByClassName.display !== "none").length;
}

function updateResults(count){
    document.getElementById("countResult").textContent = count;
}

function filter(){
    let {search, operation, language} = getFilterProperties();
}

function getFilterProperties(){
    let search = getSearchValue();
    let [radio] = getSelectedRadio();
    let operation = radio.id == "1" ? "AND" : "OR";
    let languages = ArrayFrom(getSelectedLanguages()).map((lang) => lang.name);
    return {
        search,
        operation,
        languages,
    }
}

function getSearchValue(){
    let inputSearchEl = document.getElementById("nameSearch");
    return inputSearchEl.value
}

function getSelectedRadio(){
    return Array.from(document.querySelectorAll('header input[type="radio"]:checked'));
}

function getSelectedLanguages(){
    return Array.from(document.querySelectorAll('header input[type="checkbox"]:checked'))

}