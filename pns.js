function copyText(e) {
    if(e.html()!="")
    {
            var textBox = $(".clipboard");
            textBox.val(e.html())
            textBox.select();
            document.execCommand('copy');
            cuteToast({
                type: "error", // or 'info', 'error', 'warning'
                message: "Đã copy "+e.html(),
                timer: 5000
            })
    }

  }
