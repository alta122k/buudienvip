

    $("#MidAutumnFestival").load("https://alta122k.github.io/buudienvip/alert/MidAutumnFestival/index.html")
    var checkExist = setInterval(function() {
        if ($("#MidAutumnFestival").length) {
           console.log("Exists!");
           $("#MidAutumnFestival").load("https://alta122k.github.io/buudienvip/alert/MidAutumnFestival/index.html")
           var player = videojs('my-video');
           var options = {};
         
           var player = videojs('my-video', options, function onPlayerReady() {
               
         
           // In this context, `this` is the player that was created by Video.js.
           this.play();
         
           // How about an event listener?
           this.on('ended', function() {
               this.play();
           });
           });
           clearInterval(checkExist);
        }
     }, 1000); // check every 100ms

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
