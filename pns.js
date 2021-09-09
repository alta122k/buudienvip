function copyText(e) {
    var count=0;
    if(e.html()!="")
    {           
            count=count+1
            if(count==1)
            {
                 text="Đã Copy!!!";
                 type="success"
            }    
            else if(count==2)
            {
                 text ="Double Cop!!!y"
                 type="success"
            }  
            else if(count==3)
            {
                text ="Triple Copy!!!"
                type="success"
            }
           
            else if(count==4)
            {
                 text ="Dominating!!"
                 type="success"
            }
            else if(count==5)
            {
                text ="Rampage!!!"
                type="success"
            }
            else if(count==6)
            {
                text ="Mega copy!!!"
                type="success"
            }
            else if(count==7)
            {
                text ="unstoptable!!"
                type="success"
            }
            else if(count==8)
            {
                text ="wicker Sick!!"
                type="success"
            }
            else if(count==8)
            {
                text ="Monster copy!!"
                type="success"
            }
            else if(count==9)
            {
                text ="God copy!!"
                type="error"
            }
            else if(count>9)
            {
                text ="beyond God copy!!"
                type="error"
            }
            var textBox = $(".clipboard");
            
            textBox.val(e.html())
            textBox.select();

            document.execCommand('copy');
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            $('.tr_head').css("background", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
            $('td a').css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
            cuteToast({
                type: type, // or 'info', 'error', 'warning'
                message: text,
                timer: 5000
            }).then(() => {
                count=0;
            })
    }

  }
