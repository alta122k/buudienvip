
document.getElementById("receiverAddress").addEventListener("keydown", event => {
    console.log(event.key)
    if(event.key=="/")
    {
        alert("dấu / (tự xóa)"); 
        return false;
    }
});