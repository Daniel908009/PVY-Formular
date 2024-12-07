options = ["Vyberte tvar", "Kruh", "Čtverec", "Obdelník", "Trojúhelník"];
function formOptions() {
    menu = document.getElementById("shape");
    for (i = 0; i < options.length; i++) {
        option = document.createElement("option");
        option.text = options[i];
        menu.add(option);
    }
}
formOptions();

circle = {
    polomer: 0,
    form: function() {
        return "<label for=polomer class='col-sm-3 col-form-label'>Poloměr v cm</label><input type='number' id='polomer' placeholder='Poloměr kruhu' class='col-sm-9'>";
    },
    obvod: function() {
        if (this.polomer > 0) {
            answer = Math.round((2 * Math.PI * this.polomer)*100)/100;
            return String(answer);
        }else{
            return "?";
        }
    },
    obsah: function() {
        if (this.polomer > 0) {
            answer = Math.round((Math.PI * this.polomer * this.polomer)*100)/100;
            return String(answer);
        }else{
            return "?";
        }
    }
}

square = {
    strana: 0,
    form: function() {
        return "<label for=strana class='col-sm-3 col-form-label'>Strana v cm</label><input type='number' id='strana' placeholder='Strana čtverce' class='col-sm-9'>";
    },
    obvod: function() {
        if (this.strana > 0) {
            answer = Math.round((4 * this.strana)*100)/100;
            return String(answer);
        }else{
            return "?";
        }
    },
    obsah: function() {
        if (this.strana > 0) {
            answer = Math.round((this.strana * this.strana)*100)/100;
            return String(answer);
        }else{
            return "?";
        }
    }
}

rectangle = {
    strana1: 0,
    strana2: 0,
    form: function() {
        return "<label for=strana1 class='col-sm-3 col-form-label'>První strana v cm</label><input type='number' id='strana1' placeholder='První strana obdelníku' class='col-sm-9'><label for=strana2 class='col-sm-3 col-form-label'>Druhá strana v cm</label><input type='number' id='strana2' placeholder='Druhá strana obdelníku' class='col-sm-9'>";
    },
    obvod: function() {
        if (this.strana1 > 0 && this.strana2 > 0) {
            answer = Math.round((2 * this.strana1 + 2 * this.strana2)*100)/100;
            return String(answer);
        }else{
            return "?";
        }
    },
    obsah: function() {
        if (this.strana1 > 0 && this.strana2 > 0) {
            answer = Math.round((this.strana1 * this.strana2)*100)/100;
            console.log(answer);
            return String(answer);
        }else{
            return "?";
        }
    }
}

triangle = {
    strana1: 0,
    strana2: 0,
    strana3: 0,
    form: function() {
        return "<label for=strana1 class = 'col-sm-3 col-form-label'>První strana v cm</label><input type='number' id='strana1' placeholder='První strana trojúhelníku' class='col-sm-9'><label for=strana2 class='col-sm-3 col-form-label'>Druhá strana v cm</label><input type='number' id='strana2' placeholder='Druhá strana trojúhelníku' class='col-sm-9'><label for=strana3 class='col-sm-3 col-form-label'>Třetí strana v cm</label><input type='number' id='strana3' placeholder='Třetí strana trojúhelníku' class='col-sm-9'>";
    },
    obvod: function() {
        if (this.strana1 > 0 && this.strana2 > 0 && this.strana3 > 0) {
            answer= Math.round((this.strana1 + this.strana2 + this.strana3)*100)/100;
            return String(answer);
        }else{
            return "?";
        }
    },
    obsah: function() {
        if (this.strana1 > 0 && this.strana2 > 0 && this.strana3 > 0) {
            s = Math.round((this.strana1 + this.strana2 + this.strana3)/2*100)/100;
            answer = Math.sqrt(s * (s - this.strana1) * (s - this.strana2) * (s - this.strana3));
            return String(answer);
        }else{
            return "?";
        }
    }
}

menu = document.getElementById("shape")
menu.addEventListener("change", function() {
    console.log("vybrali jste si: ", menu.value);
    if (menu.value != "Vyberte tvar") {
        formular = document.getElementById("form");
        formular.innerHTML = "";
        if (menu.value == "Kruh") {
            formular.innerHTML = circle.form();
            document.getElementById("obvod").innerHTML = "Obvod: ? cm";
            document.getElementById("obsah").innerHTML = "Obsah: ? cm²";
        } else if (menu.value == "Čtverec") {
            formular.innerHTML = square.form();
            document.getElementById("obvod").innerHTML = "Obvod: ? cm";
            document.getElementById("obsah").innerHTML = "Obsah: ? cm²";
        } else if (menu.value == "Obdelník") {
            formular.innerHTML = rectangle.form();
            document.getElementById("obvod").innerHTML = "Obvod: ? cm";
            document.getElementById("obsah").innerHTML = "Obsah: ? cm²";
        } else if (menu.value == "Trojúhelník") {
            formular.innerHTML = triangle.form();
            document.getElementById("obvod").innerHTML = "Obvod: ? cm";
            document.getElementById("obsah").innerHTML = "Obsah: ? cm²";
        }
    }
    else {
        formular = document.getElementById("form");
        formular.innerHTML = "<label class='col-sm-12 p-3'>Vyberte tvar obrazce pro zobrazení formuláře.</label>";
        document.getElementById("obvod").innerHTML = "Obvod: ? cm";
        document.getElementById("obsah").innerHTML = "Obsah: ? cm²";
        console.log("nic vybrano");
    }
});
submitButton = document.getElementById("submit_button");
submitButton.addEventListener("click", function() {
    console.log(menu.value);
    if (menu.value == "Kruh") {
        circle.polomer = parseFloat(document.getElementById("polomer").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+circle.obvod() + " cm";
        document.getElementById("obsah").innerHTML = "Obsah: "+circle.obsah() + " cm²";
    } else if (menu.value == "Čtverec") {
        square.strana = parseFloat(document.getElementById("strana").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+square.obvod() + " cm";
        document.getElementById("obsah").innerHTML = "Obsah: "+square.obsah() + " cm²";
    }
    else if (menu.value == "Obdelník") {
        rectangle.strana1 = parseFloat(document.getElementById("strana1").value);
        rectangle.strana2 = parseFloat(document.getElementById("strana2").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+rectangle.obvod() + " cm";
        document.getElementById("obsah").innerHTML = "Obsah: "+rectangle.obsah() + " cm²";
    }
    else if (menu.value == "Trojúhelník") {
        triangle.strana1 = parseFloat(document.getElementById("strana1").value);
        triangle.strana2 = parseFloat(document.getElementById("strana2").value);
        triangle.strana3 = parseFloat(document.getElementById("strana3").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+triangle.obvod() + " cm";
        document.getElementById("obsah").innerHTML = "Obsah: "+triangle.obsah() + " cm²";
    } else {
        console.log("nic vybrano");
    }
});