var today;
var date;
var month;
var year;

function mostrarFecha() {
    today = new Date();
    date = today.getDate();
    month = today.getMonth() + 1;
    year = today.getFullYear();
    var dayName = [
        "Domingo,", "Lunes,", "Martes,", "Miércoles,", "Jueves,", "Viernes,", "Sábado,"
    ];

    var suffix;
    if (date == 1 || date == 21 || date == 31) suffix = (" de");
    else if (date == 2 || date == 22) suffix = (" de");
    else suffix = (" de");

    var monthName;
    if (month == 1) monthName = ("enero");
    else if (month == 2) monthName = ("febrero");
    else if (month == 3) monthName = ("marzo");
    else if (month == 4) monthName = ("abril");
    else if (month == 5) monthName = ("mayo");
    else if (month == 6) monthName = ("junio");
    else if (month == 7) monthName = ("julio");
    else if (month == 8) monthName = ("agosto");
    else if (month == 9) monthName = ("septiembre");
    else if (month == 10) monthName = ("octubre");
    else if (month == 11) monthName = ("noviembre");
    else monthName = ("diciembre");

    var day = today.getDay();
    var formattedDate = dayName[day] + " " + date + suffix + " " + monthName + " " + year;

    // Barra superior
    var utmText = "<strong>UTM</strong> 69 años de funcionamiento <strong>|</strong> " + formattedDate;
    document.getElementById("utm").innerHTML = utmText;

    // Footer
    var footerText = `<span style="color: white;">&copy;
    `+ year + ` Universidad Técnica de Manabí | Dirección de TICS, Área de
    Desarrollo de Software
  </span>`;
    document.getElementById("text-sub-footer").innerHTML = footerText;
}

// Llama a la función cuando la página se carga completamente
window.onload = function () {
    mostrarFecha();
};
