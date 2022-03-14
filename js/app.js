function preRender(){
    let countVisibleCards=getCountVisibleCards();
}

function getCountVisibleCards(){
    return Array.from(document.getElementsByClassName("card")).filter((card) => !card.getElementsByClassName.display || card.getElementsByClassName.display !== "none").length;
}