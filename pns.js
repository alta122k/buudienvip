function copyText(e) {
    console.log(e.html())
    var textBox = document.querySelector(".clipboard");
    textBox.setAttribute('value',e.html());
  
    textBox.select();
    document.execCommand('copy');
  }