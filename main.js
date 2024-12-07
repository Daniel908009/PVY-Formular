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
        return "<input type='number' id='polomer' placeholder='Poloměr kruhu'>";
    },
    obvod: function() {
        return 2 * Math.PI * this.polomer;
    },
    obsah: function() {
        return Math.PI * this.polomer * this.polomer;
    }
}

square = {
    strana: 0,
    form: function() {
        return "<input type='number' id='strana' placeholder='Strana čtverce'>";
    },
    obvod: function() {
        answer = 4 * this.strana;
        return String(answer);
    },
    obsah: function() {
        answer = this.strana * this.strana;
        return String(answer);
    }
}

rectangle = {
    strana1: 0,
    strana2: 0,
    form: function() {
        return "<input type='number' id='strana1' placeholder='Strana obdélníku'><input type='number' id='strana2' placeholder='Druhá strana obdélníku'>";
    },
    obvod: function() {
        answer = 2 * this.strana1 + 2 * this.strana2;
        return String(answer);
    },
    obsah: function() {
        answer = this.strana1 * this.strana2;
        return String(answer);
    }
}

triangle = {
    strana1: 0,
    strana2: 0,
    strana3: 0,
    form: function() {
        return "<input type='number' id='strana1' placeholder='Strana trojúhelníku'><input type='number' id='strana2' placeholder='Druhá strana trojúhelníku'><input type='number' id='strana3' placeholder='Třetí strana trojúhelníku'>";
    },
    obvod: function() {
        answer= this.strana1 + this.strana2 + this.strana3;
        return String(answer);
    },
    obsah: function() {
        s = (this.strana1 + this.strana2 + this.strana3) / 2;
        answer = Math.sqrt(s * (s - this.strana1) * (s - this.strana2) * (s - this.strana3));
        return String(answer);
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
        } else if (menu.value == "Čtverec") {
            formular.innerHTML = rectangle.form();
        } else if (menu.value == "Obdelník") {
            formular.innerHTML = square.form();
        } else if (menu.value == "Trojúhelník") {
            formular.innerHTML = triangle.form();
        }
    }
    else {
        formular = document.getElementById("form");
        formular.innerHTML = "";
        console.log("nic vybrano");
    }
});
submitButton = document.getElementById("submit_button");
submitButton.addEventListener("click", function() {
    console.log(menu.value);
    if (menu.value == "Kruh") {
        circle.polomer = parseFloat(document.getElementById("polomer").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+circle.obvod();
        document.getElementById("obsah").innerHTML = "Obsah: "+circle.obsah();
    } else if (menu.value == "Čtverec") {
        square.strana = parseFloat(document.getElementById("strana").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+square.obvod();
        document.getElementById("obsah").innerHTML = "Obsah: "+square.obsah();
    }
    else if (menu.value == "Obdelník") {
        rectangle.strana1 = parseFloat(document.getElementById("strana1").value);
        rectangle.strana2 = parseFloat(document.getElementById("strana2").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+rectangle.obvod();
        document.getElementById("obsah").innerHTML = "Obsah: "+rectangle.obsah();
    }
    else if (menu.value == "Trojúhelník") {
        triangle.strana1 = parseFloat(document.getElementById("strana1").value);
        triangle.strana2 = parseFloat(document.getElementById("strana2").value);
        triangle.strana3 = parseFloat(document.getElementById("strana3").value);
        document.getElementById("obvod").innerHTML = "Obvod: "+triangle.obvod();
        document.getElementById("obsah").innerHTML = "Obsah: "+triangle.obsah();
    } else {
        console.log("nic vybrano");
    }
});