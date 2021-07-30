
console.log($("input"))
document.getElementById("receiverAddress").addEventListener("keydown", event => {
    console.log(event.key)
    if(event.key=="/")
    {
        alert("đm dấu / (tự xóa)"); 
        event.preventDefault()
               event.stopPropagation()
        return false;

    }
});