console.log("letss goooooo!!!");

var newname = document.querySelector("#newname");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ingore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}
function edit() {
    newname.innerText = "Dayana Echart";
}
