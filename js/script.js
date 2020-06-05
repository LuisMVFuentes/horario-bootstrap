function cargarListas() {
    hInicio.innerHTML = '';
    hFin.innerHTML = '';
    ciclo.innerHTML = '';

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
    var auxDia = parseInt(dia.value);
    var auxHinicio = parseInt(hInicio.value);
    var auxHfin = parseInt(hFin.value);
    if (!(auxDia === -1 || auxHinicio === -1 || auxHfin === -1 || auxHinicio >= auxHfin)) {
        horas.push(retornarHoras(diasdelasemana[auxDia], auxHinicio, auxHfin, aula.value))
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
    console.log(horas);
    if (!(nombre.value === '' || ciclo.value === '' || codigo.value === '' || color.value === '' || creditos.value === '' || horas.length === 0)) {
        var curso = newCurso(nombre.value, ciclo.value, color.value, codigo.value, creditos.value, horas);
        cursos.push(curso);

        /* nombre.value = '';
        ciclo.value = '';
        color.value = '';
        codigo.value = '';
        creditos.value = '';
         */
        horas = [];
        tblHoras.innerHTML = '<tr>' +
            '<th>Dia</th>' +
            '<th>Horas</th>' +
            '<th>Aula</th>' +
            '</tr>';
        cargarListas();
    }
    eliminarPopper();
    cargarCursosList();
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


                                tr1.setAttribute('style', 'background-color:' + cursos[i].Color)
                                    /**data-toggle="tooltip" data-placement="top" title="Tooltip on top" */
                                tr1.setAttribute('data-toggle', 'tooltip');
                                tr1.setAttribute('data-placement', 'top');
                                tr1.setAttribute('title', cursos[i].Nombre);


                                var texto1 = document.createTextNode(cursos[i].Codigo);

                                tr1.appendChild(texto1);

                                var sc = document.createElement('script');
                                sc.innerHTML = ' $(document).ready(function() {' +
                                    '$(\'[data-toggle="tooltip"]\').tooltip()' +
                                    '});';
                                tr1.appendChild(sc);

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

function cargarCursosList() {
    listCursos.innerHTML = '';
    for (let i = 0; i < cursos.length; i++) {
        const element = cursos[i];
        var cadena = '';
        for (let j = 0; j < element.Hora.length; j++) {
            const element1 = element.Hora[j];
            cadena += '<' + element1.dia.substring(0, 2) + '>' + element1.horas + ' ' + element1.aula;
        }
        listCursos.innerHTML += '<button type=\"button\" onclick="\eliminarCurso(' + i + ')"\ class=\"btn btn-secondary btn-sm\" href=\"#\" title=\"' + element.Nombre + '\" data-toggle=\"popover\" data-placement=\"top\" data-trigger=\"hover\" data-content=\"[Ciclo: ' + element.Ciclo + '] [Creditos: ' + element.Creditos + '][' + cadena + '] \">' + element.Codigo + ' - ' + element.Nombre + '</button>';
    }
    var sc = document.createElement('script');
    sc.innerHTML = ' $(document).ready(function() {' +
        '$(\'[data-toggle="popover"]\').popover();' +
        '$(\'.popover-dismiss\').popover({' +
        'trigger: \'hover\'' +
        '})' +
        '});';
    listCursos.appendChild(sc);
}

function eliminarPopper() {
    var body = document.getElementsByTagName('body')[0];
    var popovers = document.getElementsByClassName('popover');
    for (let i = 0; i < popovers.length; i++) {
        const element = popovers[i];
        body.removeChild(element);
    }
}

function eliminarCurso(indice) {
    if (confirm('¿Desea Eliminar ' + cursos[indice].Codigo + ' - ' + cursos[indice].Nombre + ' ?')) {
        cursos.splice(indice, 1);
        eliminarPopper();
        cargarCursosList();
        cargarHorario();
        rellenar();
    }

}


function imprimir(nombre) {
    var html = '<!DOCTYPE html>' +
        '<html lang=\"es\\">' +
        '<head>' +
        '<meta charset=\"UTF-8\">' +
        '<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">' +
        '<title>Imprimir</title>' +
        '<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"></link>' +
        '</head>' +
        '<body>' +
        '<div class=\"container\" style=\"margin:auto\">' +
        '<div class=\"row\">' +
        '<div class=\"col-sm-12 card\">' +
        '<div class=\"table-responsive\">' +
        '<table class=\"table table-sm table-hover table-bordered\" id=\"tblHorario\" style=\"text-align: center\">' +
        tblHorario.innerHTML + '</table>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</body>' +
        '</html>';
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write(html);
    ventimp.document.close();
    ventimp.print();
    ventimp.close();
}