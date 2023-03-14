function bold() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("bold");
    if( target.style.fontWeight === "bolder" ) {
        target.style.fontWeight = "normal";
        button.style.backgroundColor = null
    } else {
        target.style.fontWeight = "bolder";
        button.style.backgroundColor = "lightgreen"
    }
}

function italic() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("italic");
    if( target.style.fontStyle === "italic" ) {
        target.style.fontStyle = "normal";
        button.style.backgroundColor = null
    } else {
        target.style.fontStyle = "italic";
        button.style.backgroundColor = "lightgreen"
    }
}

function underline() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("underline");
    var strikebutton = document.getElementById("strike");
    if( target.style.textDecoration === "underline" ) {
        target.style.textDecoration = "none";
        button.style.backgroundColor = null
    } else {
        strikebutton.style.backgroundColor = null
        target.style.textDecoration = "underline";
        button.style.backgroundColor = "lightgreen"
    }
}

function strike() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("strike");
    var underlinebutton = document.getElementById("underline");
    if( target.style.textDecoration === "line-through" ) {
        target.style.textDecoration = "none";
        button.style.backgroundColor = null
    } else {
        underlinebutton.style.backgroundColor = null
        target.style.textDecoration = "line-through";
        button.style.backgroundColor = "lightgreen"
    }
}

const color = document.getElementById("color");
const textarea = document.getElementById("textfeld");

color.addEventListener("input", updateTextareaColor);

function updateTextareaColor() {
    textarea.style.color = color.value
}

const background = document.getElementById("background");

background.addEventListener("input", updateTextareaBGColor);

function updateTextareaBGColor() {
    textarea.style.backgroundColor = background.value
}

const fontsize = document.getElementById("fontsize");

fontsize.addEventListener("input", updateFontsize);

function updateFontsize() {
    textarea.style.fontSize = fontsize.value + "px"
}


function font() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("font");
    if (target.style.fontFamily === "Arial, sans-serif") {
        target.style.fontFamily = "'Brush Script MT', cursive";
        button.style.fontFamily = "'Brush Script MT', cursive";
    } else {
        target.style.fontFamily = "Arial, sans-serif";
        button.style.fontFamily = "Arial, sans-serif";
    }
}

function center() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("center");
    
    var buttonr = document.getElementById("right");
    var buttonl = document.getElementById("left");
    
    if (target.style.textAlign === "center") {
        target.style.textAlign = null
        button.style.backgroundColor = null
    } else {
        target.style.textAlign = "center"
        button.style.backgroundColor = "lightgreen"
        buttonl.style.backgroundColor = null
        buttonr.style.backgroundColor = null
    }

}

function left() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("left");
    
    var buttonr = document.getElementById("right");
    var buttonc = document.getElementById("center");
    
    if (target.style.textAlign === "left") {
        target.style.textAlign = null
        button.style.backgroundColor = null
    } else {
        target.style.textAlign = "left"
        button.style.backgroundColor = "lightgreen"
        buttonr.style.backgroundColor = null
        buttonc.style.backgroundColor = null
    }


}

function right() {
    var target = document.getElementById("textfeld");
    var button = document.getElementById("right");

    var buttonl = document.getElementById("left");
    var buttonc = document.getElementById("center");
    if (target.style.textAlign === "right") {
        target.style.textAlign = null
        button.style.backgroundColor = null

    } else {
        target.style.textAlign = "right"
        button.style.backgroundColor = "lightgreen"
        buttonl.style.backgroundColor = null
        buttonc.style.backgroundColor = null
    }

}

if (typeof(Storage) !== "undefined") {
    if (localStorage.MyText1){
      document.getElementById("textfeld").value = localStorage.MyText1;
    }
  }
  
function save() {
    localStorage.MyText1 = document.getElementById("textfeld").value;
    alert("Dein Text wurder erfolgreich gespeichert!");

}

function marker() {
    var target = document.getElementById("textfeld")
    var button = document.getElementById("marker")

    if (target.style.textShadow == "rgb(238, 255, 0) 0px 0px 5px") {
        button.style.backgroundColor = null
        target.style.textShadow = null
    } else {
        button.style.backgroundColor = "lightgreen";
        target.style.textShadow = "rgb(238, 255, 0) 0px 0px 5px"
    }
}