function colorWord(text, word) {
    if (text.includes(word)) {
        text = text.replace(word, "<span style='color:blue;'>" + word + "</span>");
    }
    return text;
}

console.log(
    document.getElementsByClassName("editor")[0].innerHTML == "pizza"
)
  