$("input").on ('keypress', function (e) {
    console.log(String.fromCharCode(e.which));
    if(String.fromCharCode(e.which)=="/")
    {
        alert("dấu /")
    }
})