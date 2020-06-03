window.addEventListener('load', function() {
    cargarListas();
    btnAgregar.addEventListener('click', agregarhoras);
    btnAgregarCurso.addEventListener('click', agregarCursos);
    cargarHorario();
    rellenar();
});