document.getElementById("editor").addEventListener("input", function() {
    console.log(document.getElementById('editor').innerText)
    document.getElementById('editor').innerText.replace(/\n/gi, function (x) {
        document.execCommand('styleWithCSS', false, true)
        document.execCommand('foreColor', false, "#ffe986")
    });
    //SynHighlight();
}, false);

/*function SynHighlight(){
    var text=document.getElementById("editor").innerText

    if(text.indexOf("My name")>-1){
        text=text.replace("My name", "<span class='blue'>My name</span>");
    }

    if(text.indexOf("my age")>-1){
        text=text.replace("my age", "<span class='blue'>my age</span>");
    }

    document.getElementById("editor").innerHTML=text;
}

Visibility() {

};*/