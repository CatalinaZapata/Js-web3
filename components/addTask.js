import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => {//arrorw function de evento que genera el formulario
    evento.preventDefault();

    const list = document.querySelector('[data-list]');//Trae lista, donde se agregan tareas
    const input = document.querySelector('[data-form-input]');//Trae el input donde se pone la tarea
    const calendar = document.querySelector('[data-form-date]');//trae calendar
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");//Ayuda a dar formato con la libreria importada moment, con format da formato

    if (value == '' || date == ''){//si no cumple la condicion no añade tarea
        return//regresa el avance en el codigo y no se ejecuta lo demas
    }

    input.value = '';//borra y limpia
    calendar.value = '';//borra y limpia

    const taskObj = {//Genera la const objeto
            value,
            dateFormat
        }

    list.innerHTML = '';
    
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];//en caso de ser null o undefined, va al array. Parse regresa el objeto de string a numero. cte =  a lo almacenado en el localstorage con la llave task, lee la info, la entrega como JSON y con parse se vuelve un objeto de js
    taskList.push(taskObj);//ingresa la info en formato del taskobj al tasklist
    localStorage.setItem('tasks', JSON.stringify(taskList));//almacenar el tasklist como string de js en JSON

    displayTasks();//crea tarea en formato taskObj y la añade a la lista con su data atribute-reemplaza don funciones anteriores
}

export const createTask = ({value, dateFormat}) => {//cte que recibe el objeto {}
    const task = document.createElement('li');//crea elemento li
        task.classList.add('card');//le añade la clase
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');//agrega la tarea task al alemento span
        titleTask.innerText = value;//agrega el valor a la tarea
        taskContent.appendChild(checkComplete());//agrega el el check de la tarea
        taskContent.appendChild(titleTask);//agrega titulo
    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
    return task;
};