function colorWord(text, word) {
    if (text.includes(word)) {
        text = text.replace(word, "<span style='color:blue;'>" + word + "</span>");
    }
    return text;
}

document.getElementById("editor").addEventListener("input", function() {
    if (document.getElementById("editor").innerHTML.includes("word")) {
        document.execCommand('styleWithCSS', false, true)
        document.execCommand('foreColor', false, "Blue")
    }
}, false);
    
