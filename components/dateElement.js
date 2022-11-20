export default (date) => {//ayudara agrupar tareas por fechas.Creara la estructura HTML para gragar al dom
    const dateElement = document.createElement('li');
        dateElement.classList.add('date');
        dateElement.innerHTML = date;
        return dateElement;
}