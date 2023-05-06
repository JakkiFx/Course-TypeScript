function run() {

    // Iterators
    let names = ["Jack", "Sofia", "Joao", "Ana", "Daniela"];
    let element = document.getElementById('info');
    element.innerHTML = "";

    /*
    // FOR - Is it possible to limit the end
    for (let i = 0; i < names.length; i++) {
        element.innerHTML += `Value: ${names[i]} <br>`;
    }
    */

    /*
    // forEach (array) - Always loop all the array
    names.forEach(function(e) { // or (e => { });
        element.innerHTML += `Value: ${e} <br>`;
    });
    */

    /*
    // ForOf
    for (const e of names) {
        element.innerHTML += `Value: ${e} <br>`;
    }
    */

    // ForIn - show index/number positions
    for (let e in names) {
        element.innerHTML += `Value: ${e} <br>`;
    }
}