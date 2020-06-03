function cargarListas() {
    var opciones = '<option disabled selected value=\"-1\">--</option>';
    for (let i = 0; i < horasdelasemana.length; i++) {
        opciones += '<option value=\"' + i + '\">' + horasdelasemana[i] + '</option>';
    }
    hInicio.innerHTML = opciones;
    hFin.innerHTML = opciones;

    var opciones1 = '<option disabled selected value=\"-1\">--</option>';
    for (let j = 0; j < diasdelasemana.length; j++) {
        opciones1 += '<option value=\"' + j + '\">' + diasdelasemana[j] + '</option>';
    }
    dia.innerHTML = opciones1;

    var opciones2 = '<option disabled selected value=\"-1\">--</option>';
    for (let k = 1; k <= 10; k++) {
        opciones2 += '<option value=\"' + k + '\">' + k + '</option>';
    }
    ciclo.innerHTML = opciones2;
}

function retornarHoras(dia, hInicio, hFin, aula) {
    var hora = {
        dia: dia,
        horas: horasdelasemana.slice(hInicio, (parseInt(hFin) + 1)),
        aula: aula
    }
    return hora;
}

var horas = [];

function agregarhoras() {
    if (!(dia.value === -1 || hInicio.value === -1 || hFin.value === -1 || hInicio.value >= hFin.value)) {
        horas.push(retornarHoras(diasdelasemana[dia.value], hInicio.value, hFin.value, aula.value))
        tblHoras.innerHTML = '<tr>' +
            '<th>Dia</th>' +
            '<th>Horas</th>' +
            '<th>Aula</th>' +
            '</tr>';
        for (let i = 0; i < horas.length; i++) {
            const element = horas[i];
            tblHoras.innerHTML +=
                '<tr>' +
                '<td>' + element.dia + '</td>' +
                '<td><p>' + element.horas + '</p></td>' +
                '<td>' + (element.aula == '' ? '--' : element.aula) + '</td>' +
                '</tr>';
        }
    }
}

function newCurso(nombre, ciclo, color, codigo, creditos, hora) {
    var curso = {
        Nombre: nombre.toUpperCase(),
        Ciclo: ciclo,
        Color: color,
        Codigo: codigo.toUpperCase(),
        Creditos: creditos,
        Hora: hora
    }

    return curso;
}

function agregarCursos() {
    if (!(nombre.value === '' || ciclo.value === '' || codigo.value === '' || color.value === '' || creditos.value === '' || horas.length === 0)) {
        var curso = newCurso(nombre.value, ciclo.value, color.value, codigo.value, creditos.value, horas);
        cursos.push(curso);

        nombre.value = '';
        ciclo.value = '';
        color.value = '';
        codigo.value = '';
        creditos.value = '';
        horas = [];
        tblHoras.innerHTML = '<tr>' +
            '<th>Dia</th>' +
            '<th>Horas</th>' +
            '<th>Aula</th>' +
            '</tr>';
        cargarListas();
    }
    console.log(cursos);

    cargarHorario();
    rellenar();
}

function cargarHorario() {
    var html = tblHorario;
    html.innerHTML = '';
    var html1 = '';

    for (var i = 0; i < horasdelasemana.length; i++) {
        html1 += '<tr>';
        for (var j = 0; j < diasdelasemana.length + 1; j++) {
            html1 += (i === 0 && j === 0) ? '<th scope=\"col\">Hora</th>' : '';
            html1 += (i === 0 && j !== 0) ? '<th scope=\"col\">' + diasdelasemana[j - 1] + '</th>' : '';
            html1 += (j === 0 && i !== 0) ? '<th scope=\"col\">' + horasdelasemana[i - 1] + '</th>' : '';
            html1 += (j !== 0 && i !== 0) ? '<th scope=\"row\" id=\"cel-' + (i - 1) + '' + (j - 1) + '\"></td>' : '';
        };
        html1 += '</tr>';
    };
    tblHorario.innerHTML = html1;
};


function rellenar() {

    for (var i = 0; i < cursos.length; i++) {
        for (var j = 0; j < cursos[i].Hora.length; j++) {
            for (var k = 0; k < diasdelasemana.length; k++) {
                if (cursos[i].Hora[j].dia === diasdelasemana[k]) {
                    for (var m = 0; m < cursos[i].Hora[j].horas.length; m++) {
                        for (var n = 0; n < horasdelasemana.length; n++) {
                            var pintar2 = 'cel-';
                            if (cursos[i].Hora[j].horas[m] === horasdelasemana[n]) {
                                pintar2 += n + '' + k;
                                //console.log(pintar2);
                                var casillero1 = document.getElementById(pintar2);
                                var tablacasillero;
                                if (document.getElementById('tabl-' + pintar2) !== null) {
                                    tablacasillero = document.getElementById('tabl-' + pintar2);
                                } else {
                                    tablacasillero = document.createElement('div');
                                    tablacasillero.setAttribute('id', 'tabl-' + pintar2);
                                }
                                var tr1 = document.createElement('div');

                                var td1 = document.createElement('div');

                                td1.setAttribute('style', 'background-color:' + cursos[i].Color)
                                td1.setAttribute('data-toggle', 'tooltip');
                                td1.setAttribute('data-placement', 'top');
                                td1.setAttribute('title', cursos[i].Nombre + "\n" + 'Aula: ' + cursos[i].Hora[j].aula);
                                var texto1 = document.createTextNode(cursos[i].Codigo);
                                td1.appendChild(texto1);
                                tr1.appendChild(td1);
                                tablacasillero.appendChild(tr1);
                                casillero1.appendChild(tablacasillero);



                                //document.getElementById(pintar2).innerHTML = cursos[i].Codigo;
                            };
                        };
                    };
                };
            };
        };
    };
};