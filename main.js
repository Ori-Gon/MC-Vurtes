document.getElementById("editor").addEventListener("input", function() {
    console.log(document.getElementById('editor').innerText)
    document.getElementById('editor').innerText.replace(/\n/gi, function (x) {
        document.execCommand('styleWithCSS', false, true)
        document.execCommand('foreColor', false, "#ffe986")
    });
}, false);
