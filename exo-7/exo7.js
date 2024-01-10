console.log("exo-7");

console.log(jsonDatas);

document.addEventListener("DOMContentLoaded", function () {
    showList();
    document.querySelector("[name=sortArticle]").addEventListener("click", showList);
    document.querySelector("[name=stock]").addEventListener("change", showList);
    document.querySelector("[name=sort]").addEventListener("change", showList);
    document.querySelector("[name=sens]").addEventListener("change", showList);
    document.querySelector("[name=addArticle]").addEventListener("click", function (e) {
        e.preventDefault();
        addArticle();
    });
})

// function translateType(data) {
//     let type =
//     {
//         house: "maison",
//         game: "jeu",
//         videoGame: "jeux videos",
//         car: "voiture",
//         show: "entré",
//     }

//     data.forEach(element => {

//         element[element.type] = type[element.type]
//     });
//     return data;
// }


// function showList() {
//     document.getElementById("articles").innerHTML = "";
//     let data = filterData();
//     data.forEach(element => {
//         createArticlesCards(element)
//     });
// }

// function filterData() {

//     let tabArticle = sortArticlesByType();
//     let valueOfStock = document.querySelector("[name = stock]").checked;
//     if (valueOfStock == true) {
//         tabArticle = isStock(tabArticle)
//     }
//     sortData(tabArticle);
//     tabArticle = translateType(tabArticle)
//     return tabArticle
// }

// function sortData(tabData) {
//     let tri = document.querySelector("[name=sort]").value;
//     let sens = document.querySelector("[name=sens]").value;

//     if (tri == "name") {
//         tabData.sort(function (a, b) {
//             if (a.name < b.name) {
//                 if (sens == "asc") {
//                     return -1;
//                 } else if (sens == "desc") {
//                     return 1;
//                 }
//             }
//             if (a.name > b.name) {
//                 if (sens == "asc") {
//                     return 1;
//                 } else if (sens == "desc") {
//                     return -1;
//                 }
//             }
//         })
//     } else if (tri == "price") {
//         tabData.sort(function (a, b) {
//             if (sens == "asc") {
//                 return a.price - b.price;
//             } else if (sens == "desc") {
//                 return b.price - a.price;
//             }
//         })
//     }
// }


// function createArticlesCards(element) {

//     let listArticles = document.getElementById("articles");
//     let card = document.createElement("div");
//     listArticles.append(card);
//     card.style.padding = '24px';

//     for (index in element) {

//         if (!(typeof (element[index]) == "string" && element[index].trim() == "")) {


//             if (index == "name") {
//                 let elmt = document.createElement("h3");
//                 card.append(elmt);
//                 elmt.append(element[index]);

//             } else {
//                 let elmt = document.createElement("p");
//                 card.appendChild(elmt);
//                 elmt.append(element[index]);

//             }

//         }
//     }

// }

// function sortArticlesByType() {

//     let search = document.querySelector(".search").value;
//     let result = [];
//     if (search.trim() != "") {
//         jsonDatas.forEach(e => {
//             if (e.type == search.toLowerCase().trim()) {
//                 result.push(e);
//             }
//         })
//     } else {
//         return jsonDatas
//     }

//     return result;
// }

// function isStock(tab) {

//     result = [];

//     tab.forEach(e => {
//         if (e.quantity > 0) {
//             result.push(e);
//         }
//     })
//     return result;
// }


// function addArticle() {

//     tabProperty = ["name", "type", "description", "price", "quantity"];
//     let newArticle = {};

//     for (property of tabProperty) {
//         let propertyValue = document.querySelector("[name=" + property + "]").value;
//         newArticle[property] = propertyValue;
//         document.querySelector("[name=" + property + "]").value = "";
//     }
//     jsonDatas.push(newArticle);
//     showList();
// }

// ========== V2 data.js retravaillé

let jsonDatasV2 = convertData();

function convertData() {

    let jsonDatas2 = [];
    

    jsonDatas.forEach(elmt => {
        let isPush = false;
        let obj = {
            "name": elmt.name,
            "description": elmt.description,
            "price": elmt.price,
            "quantity": elmt.quantity,
            "contact" : {
                "lastname" : "Henry",
                "firstname" : "Dupont",
                "address" : "5 rue de la caraffe",
            }
        }

        jsonDatas2.forEach(element => {
            
            if (element.type == elmt.type) {
                element.items.push(obj);
                isPush = true;
            }

        })

        if (isPush == false) {

            let objet = {
                "type": elmt.type,
                "items": [obj],
            }
            jsonDatas2.push(objet);

        }

    })

    return jsonDatas2;
}


function translateType(data) {
    let type =
    {
        house: "maison",
        game: "jeu",
        videoGame: "jeux videos",
        car: "voiture",
        show: "entré",
    }

    data.forEach(element => {

        element[element.type] = type[element.type]
    });
    return data;
}


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
    tabArticle = translateType(tabArticle)
    return tabArticle
}

function sortData(tabData) {
    let tri = document.querySelector("[name=sort]").value;
    let sens = document.querySelector("[name=sens]").value;

    if (tri == "name") {
        tabData.sort(function (a, b) {
            if (a.name < b.name) {
                if (sens == "asc") {
                    return -1;
                } else if (sens == "desc") {
                    return 1;
                }
            }
            if (a.name > b.name) {
                if (sens == "asc") {
                    return 1;
                } else if (sens == "desc") {
                    return -1;
                }
            }
        })
    } else if (tri == "price") {
        tabData.sort(function (a, b) {
            if (sens == "asc") {
                return a.price - b.price;
            } else if (sens == "desc") {
                return b.price - a.price;
            }
        })
    }
}


function createArticlesCards(element) {

    let listArticles = document.getElementById("articles");
    let card = document.createElement("div");
    listArticles.append(card);
    card.style.padding = '24px';

    for (index in element) {

       
        if (!(typeof (element[index]) == "string" && element[index].trim() == "")) {


            if (index == "name") {
                let elmt = document.createElement("h3");
                card.append(elmt);
                elmt.append(element[index]);

            } else if (index == "items") {
                let items = element["items"];

                for (property in items){
                    let elmt = document.createElement("p");
                    card.appendChild(elmt);
                    elmt.append(items[property]);
                }
            }

        }
    }

}

function sortArticlesByType() {

    let search = document.querySelector(".search").value;
    let result = [];
    if (search.trim() != "") {
        jsonDatasV2.forEach(e => {
            if (e.type == search.toLowerCase().trim()) {
                result.push(e);
            }
        })
    } else {
        return jsonDatasV2
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


function addArticle() {

    tabProperty = ["name", "type", "description", "price", "quantity"];
    let newArticle = {};

    for (property of tabProperty) {
        let propertyValue = document.querySelector("[name=" + property + "]").value;
        newArticle[property] = propertyValue;
        document.querySelector("[name=" + property + "]").value = "";
    }
    jsonDatas.push(newArticle);
    showList();
}