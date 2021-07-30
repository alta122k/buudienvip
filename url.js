$.getScript("https://code.jquery.com/jquery-3.6.0.min.js");
$("input").on ('keypress', function (e) {
    console.log(String.fromCharCode(e.which));
    if(String.fromCharCode(e.which)=="/")
    {
        alert("dấu /")
    }
})