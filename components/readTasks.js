import { createTask } from "./addTask.js";

export const readTasks = () => {//evento que ayuda a visualizar el arreglo en la consola
    const list = document.querySelector('[data-list]');//Ayuda a agrgar a la lista de tareas
    console.log(list);
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];//trae la info a este js
    tasksList.forEach((task) => {//forEach ayuda a recorrer la info del array asociado
        list.appendChild(createTask(task));//llama a task porque el return es task. Ayuda a enlazar con el formator necesario para guardar en array.
    });
}