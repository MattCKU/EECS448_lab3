function recolor() {
    /*
        Variables for the different color attributes
    */
    let borRed = document.getElementById("borderRed").value;
    let borBlue = document.getElementById("borderBlue").value;
    let borGreen = document.getElementById("borderGreen").value;
    let borWidth = document.getElementById("borderWidth").value;
    let backRed = document.getElementById("bgRed").value;
    let backGreen = document.getElementById("bgGreen").value;
    let backBlue = document.getElementById("bgBlue").value;

    let change = document.getElementById('para');
//changing the actual paragraph
change.style.borderColor = 'rgb(' + borRed + ',' + borGreen + ',' + borBlue + ')';
change.style.borderWidth = borWidth +"px";
change.style.borderStyle = "solid";
change.style.backgroundColor = 'rgb(' + backRed + ',' + backGreen + ',' + backBlue + ')';
}