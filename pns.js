
function copyText(e) {

    if(e.html()!="")
    {           
           
                 text="Đã Copy!!!";
                 type="success"
                 cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
              
          
            var textBox = $(".clipboard");
            
            textBox.val(e.html())
            textBox.select();

            document.execCommand('copy');
            // var colorR = Math.floor((Math.random() * 256));
            // var colorG = Math.floor((Math.random() * 256));
            // var colorB = Math.floor((Math.random() * 256));
            // $('.tr_head').css("background", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
            // $('td a').css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
           
    }

  }
