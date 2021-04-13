document.getElementById("editor").addEventListener("input", function() {
    if (document.getElementById("editor").innerHTML.includes("word")) {
        document.execCommand('styleWithCSS', false, true)
        document.execCommand('foreColor', false, "Blue")
    }
}, false);
    
