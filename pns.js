function copyText(e) {
    console.log(e.html())
    var textBox = document.querySelector(".clipboard");
    textBox.setAttribute('value',e.html());
  
    textBox.select();
    document.execCommand('copy');
    cuteToast({
        type: "success", // or 'info', 'error', 'warning'
        message: "Đã copy",
        timer: 5000
      })
  }