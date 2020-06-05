var diasdelasemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
var horasdelasemana = ['07:30', '08:20', '09:10', '10:00', '10:50', '11:40', '12:30', '13:20', '14:10', '15:00', '15:50', '16:40', '17:30', '18:20', '19:10', '20:00', '20:50', '21:40', '22:30'];

var cursosPlan = ['TECNICAS DE COMUNICACION',
    'INTRODUCCION A LA INGENIERIA DE SISTEMAS',
    'CALCULO DIFERENCIAL',
    'MATEMATICA DISCRETA',
    'ALGEBRA LINEAL',
    'REALIDAD NACIONAL E INTERNACIONAL',
    'ECONOMIA',
    'TECNICAS DEL TRABAJO UNIVERSITARIO',
    'ESTADISTICA Y PROBABILIDADES',
    'TALLER DE COMPUTACION E INFORMATICA BASICA',
    'CALCULO INTEGRAL',
    'GEOMETRIA ANALITICA',
    'SOCIOLOGIA',
    'CONTABILIDAD GERENCIAL',
    'FISICA I',
    'METODOLOGIA DE LA INVESTIGACION CIENTIFICA',
    'DIBUJO DE INGENIERIA ASISTIDA POR COMPUTADORA',
    'ALGORITMOS Y ESTRUCTURAS DE DATOS',
    'ECUACIONES DIFERENCIALES',
    'ADMINISTRACION',
    'ESTADISTICA Y PROBABILIDADES APLIC. A LA INGENIERI',
    'FISICA II',
    'INVESTIGACION DE OPERACIONES I',
    'LENGUAJE DE PROGRAMACION',
    'FUNDAMENTOS DE BASE DE DATOS',
    'MATEMATICA APLICADA A LA INGENIERIA',
    'ORGANIZACION Y METODOS',
    'COSTOS Y PRESUPUESTOS',
    'FISICA III',
    'INVESTIGACION DE OPERACIONES II',
    'SISTEMAS ELECTRICOS Y ELECTRONICOS',
    'INGENIERIA DE SOFTWARE',
    'TALLER DE PROGRAMACION',
    'SISTEMAS CONTABLES',
    'INGENIERIA DE LA INFORMACION',
    'FUNDAMENTOS DE REDES DE COMPUTADORAS',
    'SISTEMICA',
    'SISTEMAS PRODUCTIVOS',
    'TALLER DE IMPLEMENT. Y ADMINIST. DE SISTEMAS DE BD',
    'GESTION EMPRESARIAL',
    'SISTEMAS LOGISTICOS',
    'SISTEMAS ECONOMICOS',
    'DISEÑO DE EXPERIMENTOS',
    'SISTEMAS DIGITALES',
    'DINAMICA DE SISTEMAS',
    'SISTEMAS DE COMUNICACION DE DATOS',
    'GESTION FINANCIERA',
    'INGENIERIA ESTRATEGICA',
    'TALLER DE IMPLENT. Y ADMIN. DE REDES DE COMPUT.',
    'NORMALIZACION Y CALIDAD',
    'MODELAMIENTO Y SIMULACION',
    'ARQUITECTURA DE COMPUTADORAS',
    'LEGISLACION INFORMATICA',
    'GESTION DE RECURSOS HUMANOS',
    'MEDIO AMBIENTE',
    'PROYECTOS DE INVERSION Y GENERACION DE EMPRESAS',
    'INTELIGENCIA ARTIFICIAL',
    'CONTROL Y AUTOMATIZACION DE PROCESOS',
    'SEGURIDAD INFORMATICA',
    'METODOS DE PREDICCION',
    'GESTION DE PROYECTOS INFORMATICOS',
    'AUDITORIA DE SISTEMAS INFORMATICOS',
    'APLICACIONES DE NEGOCIOS ELECTRONICOS',
    'GERENCIA ESTRATEGICA',
    'ROBOTICA',
    'SEMINARIO DE TOPICOS DE INGENIERIA DE SISTEMAS'
];

var codigosCursos = ['ED107',
    'IS101',
    'MM231',
    'MM232',
    'MM233',
    'SO113',
    'EC156',
    'ED152',
    'EE163',
    'IS151',
    'MM259',
    'MM260',
    'SO154',
    'CO207',
    'FF225',
    'IS211',
    'IS212',
    'IS213',
    'MM278',
    'AD269',
    'EE252',
    'FF267',
    'IS253',
    'IS254',
    'IS255',
    'MM251',
    'AD326',
    'CO310',
    'FF311',
    'IS331',
    'IS332',
    'IS333',
    'IS334',
    'IS351',
    'IS352',
    'IS353',
    'IS354',
    'IS355',
    'IS356',
    'AD428',
    'IS411',
    'IS412',
    'IS413',
    'IS414',
    'IS415',
    'IS416',
    'EC470',
    'IS456',
    'IS457',
    'IS458',
    'IS459',
    'IS461',
    'IS486',
    'AD527',
    'IC531',
    'IS501',
    'IS502',
    'IS503',
    'IS504',
    'IS505',
    'IS551',
    'IS552',
    'IS553',
    'IS554',
    'IS555',
    'IS556'
]

var cursos = [{
    Nombre: 'ORGANIZACION Y METODOS',
    Ciclo: 5,
    Codigo: 'AD326',
    Creditos: 3,
    Color: '#ffffff',
    Hora: [{
        dia: 'Martes',
        horas: ['12:30', '13:20'],
        aula: 'Aul.32'
    }]
}, {
    Nombre: 'ORGANIZACION Y METODOS',
    Ciclo: 5,
    Codigo: 'AD326',
    Creditos: 3,
    Color: '#ffffff',
    Hora: [{
        dia: 'Jueves',
        horas: ['12:30', '13:20'],
        aula: 'Mlt.01'
    }]
}];

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

var listCursos = (col8.getElementsByTagName('div')[0]).getElementsByClassName('cursoslist')[0];