function preRender(){
    let countVisibleCards=getCountVisibleCards();
}

function getCountVisibleCards(){
    return Array.from(document.getElementsByClassName("card"))
}