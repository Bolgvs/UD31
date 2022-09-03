let p = document.getElementById("p");
let table1 = document.getElementsByTagName("tr")[0];
let table2 = document.getElementsByTagName("tr")[1];
let span = document.getElementById("span");
p.onclick = firstparagraph;
table1.onclick = secondparagraph;
table2.onclick = thirdparagraph;

function firstparagraph() {
    console.log("p onclick")
    span.innerHTML = `Primer parrafo`;
}

function secondparagraph() {
    console.log("p onclick")
    span.innerHTML = `Segundo parrafo`;
}

function thirdparagraph() {
    console.log("p onclick")
    span.innerHTML = `Tercer parrafo`;
}
