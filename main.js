document.getElementById("editor").addEventListener("input", function () {
}, false);

function FileChange() {
    var reader = new FileReader();
    reader.readAsText(document.getElementById("Upload-Files").files[0], "UTF-8");
    reader.onload = function (evt) {
        document.getElementById("editor").innerText = evt.target.result;
    }
    reader.onerror = function (evt) {
        document.getElementById("editor").innerText = "error reading file";
    }
};

function PopupDisplay(IdOfPopup) {
    document.getElementById("Upload").style.display = "none";
    document.getElementById("Download").style.display = "none";
    document.getElementById(IdOfPopup).style.display = "block";
};

function DownloadFile() {
    filename = document.getElementById("FileName").value;
    text = document.getElementById('editor').innerText;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};