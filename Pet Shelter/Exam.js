console.log("yellow belt exam...")

function removedonate() {
    var elem = document.getElementById ('donate');
    elem.parentNode.removeChild(elem);
}

function onClickSpeciesMenu() {
    var elem = document.getElementById('animals');
    var value = elem.options[elem.selectedIndex].value;
    console.log("animal ",value);
    
    if (value=='dog'){
        alert("woof woof woof "+ value);
    } else{
        alert("this is not a dog but.. "+ value);
    }
}