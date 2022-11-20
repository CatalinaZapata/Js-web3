import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {//evento que ayuda a visualizar el arreglo en la consola
    const list = document.querySelector('[data-list]');//Ayuda a agrgar a la lista de tareas
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];//trae la info a este js 
    const dates = uniqueDates(tasksList);
    orderDates(dates);
    dates.forEach(date => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {//forEach ayuda a recorrer la info del array asociado
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if (diff == 0) list.appendChild(createTask(task));//llama a task porque el return es task. Ayuda a enlazar con el formator necesario para guardar en array.
        });
    });
}