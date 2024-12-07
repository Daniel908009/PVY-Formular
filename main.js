menu = document.getElementById("shape")
menu.addEventListener("change", function() {
    console.log("vybrali jste si: ", menu.value);
    if (menu.value != "Vyberte tvar") {
        formular = document.getElementById("form");
        formular.innerHTML = "";
        if (menu.value == "Kruh") {
            formular.innerHTML = "<input type='number' id='polomer' placeholder='Poloměr kruhu'><button onclick='kruh()'>Vypočítat</button>";
        }
    }
    else {
        console.log("nic vybrano");
    }
});