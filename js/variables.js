var diasdelasemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
var horasdelasemana = ['07:30', '08:20', '09:10', '10:00', '10:50', '11:40', '12:30', '13:20', '14:10', '15:00', '15:50', '16:40', '17:30', '18:20', '19:10', '20:00', '20:50', '21:40', '22:30'];

var cursos = [];

var element = document.getElementsByTagName('body')[0];
element = element.getElementsByTagName('div')[0];
element = element.getElementsByTagName('div')[0];

var col4 = element.getElementsByTagName('div')[0];
var col8 = element.getElementsByTagName('div')[14];


var row = col4.getElementsByTagName('div')[0];

var box = col4.getElementsByTagName('div')[6];


var nombre = (row.getElementsByTagName('div')[0]).getElementsByTagName('input')[0];

var color = (row.getElementsByTagName('div')[1]).getElementsByTagName('input')[0];

var ciclo = (row.getElementsByTagName('div')[2]).getElementsByTagName('select')[0];

var codigo = (row.getElementsByTagName('div')[3]).getElementsByTagName('input')[0];

var creditos = (row.getElementsByTagName('div')[4]).getElementsByTagName('input')[0];

var dia = (box.getElementsByTagName('div')[0]).getElementsByTagName('select')[0];

var aula = (box.getElementsByTagName('div')[2]).getElementsByTagName('input')[0];

var hInicio = (box.getElementsByTagName('div')[3]).getElementsByTagName('select')[0];

var hFin = (box.getElementsByTagName('div')[4]).getElementsByTagName('select')[0];

var btnAgregar = col4.getElementsByTagName('button')[0];

var btnAgregarCurso = col4.getElementsByTagName('button')[1];

var tblHoras = document.getElementById('tblhoras');

var tblHorario = (col8.getElementsByTagName('div')[0]).getElementsByTagName('table')[0];