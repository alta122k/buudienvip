$("form .form-group button").ready(function () {
    if(window.location.href=="https://pns.vnpost.vn/dang-nhap.html")
    {
        var id = ["163265_tbc", "163240_tbc"]
        var html = "";
        var today = "";
        var a = new Date();
        var count=0;
        if (a.getDate().toLocaleString().length != 2) {
            today += "0" + a.getDate().toLocaleString();
        }
        else {
            today += a.getDate().toLocaleString();
        }
        today += "/"; 
        if (a.getMonth().toLocaleString().length != 2) {
            var thang = a.getMonth() + 1;
            today += "0" + thang;
        }
        else {
            today += a.getMonth().toLocaleString();
        }
        today += "/" + a.getFullYear();
        var day= "mã thu gom ngày " + today;
        
      var loop=  $("form .form-group ").on('click', 'button#vip', function () {
            var newWindow = window.open();
            newWindow.document.write("Vui lòng chờ không tắt tab pns!<br>");
            for (var i = 0; i < 2; i++) {
                $.ajax({
                    method: 'post',
                    url: "/dang-nhap.html",
                    data: {
                        userid: id[i],
                        password: "1234",
                        redirect: "/"
                    },
                    success: function (s) {
                        $.ajax({
                            url: "/Order/Home/ListOrder",
                            dataType: "html",
                            type: "Get",
                            data: {
                                Id: 0,
                                FromDate: today,
                                ToDate: today,
                                Page: 1,
                            },
                            success: function (alta) {
                                count++;
                                html += alta;
                                if(count==1)
                                {
                                    newWindow.document.write("Đang lấy 163265<br>");
                                }
                                if(count==2)
                                {
                                    newWindow.document.write("Đang lấy 163240<br>");
                                    $.ajax({
                                        method:"get",
                                        url:"/Home/SignOut",
                                        success:function(){
                                            newWindow.document.write("Xong ! <br>");
                                            html=day+html;
                                            newWindow.document.write(html);
                                        }
                                    })
                                    
                                }
                            },
                            error: function (e) {
                                console.log(e)
                            }
                        });
            
                    },
                    error: function (s) {
                        console.log(s)
                    }
                })
            }

        })
        
        var div = $("form .form-group button").parent();
        var bnt = '<button class="btn btn-lg btn-primary btn-block" id="vip"  type="button" style="width:100%;">Lấy tất cả dữ liệu</button>'
        div.append(bnt)
    }
});
