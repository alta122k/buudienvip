function copyText(e) {
    console.log(e)
    var textBox = document.querySelector(".clipboard");
    textBox.setAttribute('value', e);
  
    textBox.select();
    document.execCommand('copy');
  }