document.getElementById("receiverAddress").addEventListener("keydown", event => {
    console.log(event.key)
    if(event.key=="/")
    {
        alert("đm dấu / (tự xóa)"); 
               param.evt.preventDefault()
        param.evt.stopPropagation()
        return false;

    }
});