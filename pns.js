

    $("#MidAutumnFestival").load("https://alta122k.github.io/buudienvip/alert/MidAutumnFestival/index.html")
    var checkExist = setInterval(function() {
        if ($("#MidAutumnFestival").length) {
           console.log("Exists!");
           $("#MidAutumnFestival").load("https://alta122k.github.io/buudienvip/alert/MidAutumnFestival/index.html", function() {
         
          });
           clearInterval(checkExist);
          
        }
     }, 1000); // check every 100ms
     $(function() {
      
     $("td a").click(function(s){
         
        if(s.detail==1)
            {
                 text="Đã Copy!!!";
                 type="success"
                 cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }    
            else if(s.detail==2)
            {
                 text ="Double Cop!!!y"
                 type="success"
                 cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }  
            else if(s.detail==3)
            {
                text ="Triple Copy!!!"
                type="success"
                cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
           
            else if(s.detail==4)
            {
                 text ="Dominating!!"
                 type="success"
                 cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
            else if(s.detail==5)
            {
                text ="Rampage!!!"
                type="success"
                cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
            else if(s.detail==6)
            {
                text ="Mega copy!!!"
                type="success"
                cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
            else if(s.detail==7)
            {
                text ="unstoptable!!"
                type="success"
                cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
            else if(s.detail==8)
            {
                text ="wicker Sick!!"
                type="success"
                cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
            else if(s.detail==9)
            {
                text ="Monster copy!!"
                type="success"
                cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
            else if(s.detail==10)
            {
                text ="God copy!!"
                type="error"
                cuteToast({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                })
            }
            else if(s.detail>10)
            {
                text ="beyond God copy!!"
                type="error"
                
                cuteToastshake({
                    type: type, // or 'info', 'error', 'warning'
                    message: text,
                    timer: 5000
                }).then(() => {
                    count=0;
                })
            }
     })  
    });
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
