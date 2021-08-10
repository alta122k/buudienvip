$("form .form-group button").ready(function () {
    if(window.location.href=="https://pns.vnpost.vn/dang-nhap.html")
    {
        jQuery.loadCSS = function(url,na) {
            if (!$('link[href="' + url + '"]').length)
            na.document.write('<link rel="stylesheet" type="text/css" href="' + url + '">\
            <title>Ahihi NYC là đồ con chó</title>\
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>\
            <script src="https://alta122k.github.io/buudienvip/pns.js"></script>\
            <script src="https://alta122k.github.io/buudienvip/alert/cute-alert.js"></script>\
            <link rel="stylesheet" type="text/css" href="https://alta122k.github.io/buudienvip/alert/style.css">\
            ');
        }
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
        var day= '<div class="alert alert-primary" role="alert">\
    Mã thu gom ngày '+today+'\
    </div>' ;
        
    $("form .form-group ").on('click', 'button#vip', function () {
      
        $("input").prop("disabled", true);
        $("button").prop("disabled", true);
            var newWindow = window.open();
            $.loadCSS('https://alta122k.github.io/buudienvip/pnw.css',newWindow);
            $.loadCSS("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",newWindow)
            newWindow.document.write("<div class=\"alert alert-danger\" role=\"alert\">\
                                            Đang Đăng nhập <br> KHông tắt tab Pns\
                                        </div>");
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
                        count++;
                
                    if(count==1)
                    {
                            newWindow.document.write('<div class="alert alert-success" role="alert">\
                                ĐĂNG NHẬP THÀNH CÔNG !\
                            </div>');
                            newWindow.document.write('<div class="alert alert-info" role="alert">\
                            Đang lấy dữ liệu 163265 !\
                            </div>');
                    }
                    if(count==2)
                    {
                            newWindow.document.write('<div class="alert alert-info" role="alert">\
                            Đang lấy dữ liệu 163240 !\
                        </div>');
                        }
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
                            
                            
                                html += alta;
                            
                            if(count==2)
                            {
                                    $.ajax({
                                        method:"get",
                                        url:"/Home/SignOut",
                                        success:function(){
                                            newWindow.document.write('<div class="alert alert-success" role="alert">\
                                            Xong ! Bấm  vào mã thu gom để copy\
                                        </div>');
                                            html=day+html;
                                            html=html.replaceAll("Nhận h&#224;ng th&#224;nh c&#244;ng","l@y h@ng th@nh c0ng")
                                            html=html.replaceAll("&nbsp;Kh&#250;c Văn Chinh&nbsp;","khucvanchinh")
                                            html=html.replaceAll("href","onclick='copyText($(this))'   ")
                                            html+='<input class="clipboard" />';
                                            newWindow.document.write(html);
                                            html="";
                                            count=0;
                                            $("input").prop("disabled", false);
                                            $("button").prop("disabled", false);
                                            newWindow.stop();
                                        }
                                    })
                                    
                            }
                                
                                
                                
                            },
                            error: function (e) {
                                console.log(e)
                                newWindow.document.write("<div class=\"alert alert-danger\" role=\"alert\">\
                                Có lỗi xảy ra hay thử refest trang pns(không sử dụng ẩn danh)\
                            </div>");
                            }
                        });
            
                    },
                    error: function (s) {
                        console.log(s)
                        newWindow.document.write("<div class=\"alert alert-danger\" role=\"alert\">\
                    Có lỗi xảy ra hay thử refest trang pns(không sử dụng ẩn danh)\
                    </div>");
                    }
                })
            }

        })
        
        var div = $("form .form-group button").parent();
        var bnt = '<button class="btn btn-lg btn-primary btn-block" id="vip"  type="button" style="width:100%;">Lấy tất cả dữ liệu</button>'
        div.append(bnt)
    }
});