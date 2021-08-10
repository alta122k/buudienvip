function copyText(e) {
    if(e.html()!="")
    {
          console.log(e.html())
            var textBox = document.querySelector(".clipboard");
            textBox.setAttribute('value',e.html());
        
            textBox.select();
            document.execCommand('copy');
            cuteToast({
                type: "success", // or 'info', 'error', 'warning'
                message: "Đã copy "+e.html(),
                timer: 5000
            })
    }
  
  }