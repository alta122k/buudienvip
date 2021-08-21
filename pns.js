function copyText(e) {
    if(e.html()!="")
    {
            var textBox = $(".clipboard");
            textBox.val(e.html())
            textBox.select();
            document.execCommand('copy');
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            $('.tr_head').css("background", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
            cuteToast({
                type: "success", // or 'info', 'error', 'warning'
                message: "Đã copy "+e.html(),
                timer: 5000
            })
    }

  }
