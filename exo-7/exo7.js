console.log("exo-7");

console.log(jsonDatas);

document.addEventListener("DOMContentLoaded", function () {
    showList();
    document.querySelector("button").addEventListener("click", showList);
    document.querySelector("[name=stock]").addEventListener("change", showList);
    document.querySelector("[name=sort]").addEventListener("change" , showList);
    document.querySelector("[name=sens]").addEventListener("change", showList);
})

let type =
{
    house: "maison",
    game: "jeu",
    videoGame: "jeux videos",
    car: "voiture",
    show: "entré",
}

jsonDatas.forEach(element => {

    element[element.type] = type[element.type]
});

console.log(jsonDatas)

function showList() {
    document.getElementById("articles").innerHTML = "";
    let data = filterData();
    data.forEach(element => {
        createArticlesCards(element)
    });
}

function filterData() {

    let tabArticle = sortArticlesByType();
    let valueOfStock = document.querySelector("[name = stock]").checked;
    if (valueOfStock == true) {
        tabArticle = isStock(tabArticle)
    }
    sortData(tabArticle);
    return tabArticle
}


function createArticlesCards(element) {

    let listArticles = document.getElementById("articles");
    let card = document.createElement("div");
    listArticles.append(card);
    card.style.padding = '24px';
    console.log(element);

    for (property in element) {

        if (!(typeof (element[property]) == "string" && element[property].trim() == "")) {


            if (property == "name") {
                let elmt = document.createElement("h3");
                card.append(elmt);
                elmt.append(element[property]);

            } else {
                let elmt = document.createElement("p");
                card.appendChild(elmt);
                elmt.append(element[property]);

            }

        }
    }

}

function sortArticlesByType() {

    let search = document.querySelector(".search").value;
    let result = [];
    if (search.trim() != "") {
        jsonDatas.forEach(e => {
            if (e.type == search.toLowerCase().trim()) {
                result.push(e);
            }
        })
    } else {
        return jsonDatas
    }

    return result;
}

function isStock(tab) {

    result = [];

    tab.forEach(e => {
        if (e.quantity > 0) {
            result.push(e);
        }
    })
    return result;
}

function sortData(tabData) {
    let tri = document.querySelector("[name=sort]").value;
    let sens = document.querySelector("[name=sens]").value;

    if (tri == "name") {
        tabData.sort(function (a, b) {
            if (a.name < b.name) {
                if(sens == "asc"){
                    return -1;
                } else if(sens == "desc"){
                    return 1;
                }  
            }
            if (a.name > b.name) {
                if(sens == "asc"){
                    return 1;
                } else if(sens == "desc"){
                    return -1;
                } 
            }
        })
    }else if(tri == "price"){
        tabData.sort(function (a, b){
            if(sens == "asc"){
                return a.price - b.price;
            }else if(sens == "desc"){
                return b.price - a.price;
            }
        })
    }
}

function addArticle() {

}