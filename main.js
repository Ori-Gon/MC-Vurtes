let Editor = document.getElementById('Editor');
let ToolBar = document.getElementById('ToolBar');
let InfoBar = document.getElementById("InfoBar");

Editor.addEventListener("input", function () {
    localStorage.setItem("Content", Editor.innerText);
}, false);

InfoBar.style.display = "none";

function FileChange() {
    var reader = new FileReader();
    reader.readAsText(document.getElementById("Upload-Files").files[0], "UTF-8");
    reader.onload = function (evt) {
        Editor.innerText = evt.target.result;
        localStorage.setItem("Content", Editor.innerText);
    }
    reader.onerror = function (evt) {
        Editor.innerText = "error reading file";
    }
};

function PopupDisplay(IdOfPopup) {
    InfoBar.style.display = "block";
    document.getElementById("Upload").style.display = "none";
    document.getElementById("Download").style.display = "none";
    document.getElementById(IdOfPopup).style.display = "block";
};

function DownloadFile() {
    filename = document.getElementById("FileName").value;
    text = Editor.innerText;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

function LoadLocalFile(){
    let OldContent = localStorage.getItem("Content");
    Editor.innerText = OldContent;
}

function LoadTheme() {
    var Root = document.querySelector(':root');
    for (let index = 0; index < Object.keys(JSON.parse(localStorage.getItem("CustomTheme"))).length; index++) {
        var Key = Object.keys(JSON.parse(localStorage.getItem("CustomTheme")))[index];
        var KeyObject = JSON.parse(localStorage.getItem("CustomTheme"))[Key];
        Root.style.setProperty(Key, KeyObject);
    }
    /*JSON.parse(localStorage.getItem("CustomTheme"))["--Editor-Text-Color"];
    Object.keys(JSON.parse(localStorage.getItem("CustomTheme")))[0];*/
}

Mousetrap.bind('ctrl+b', function(e) {
    if (InfoBar.style.display == "none") {
        InfoBar.style.display = "block";
    }
    else {
        InfoBar.style.display = "none";
    }
    return false;
});
