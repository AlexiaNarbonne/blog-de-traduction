function copy(that) {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    alert("Email copié dans le presse-papier.")
}