import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js"; 

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

displayTasks(); //primero export, luego import y luego llamar la función. Ayuda a ver el arreglo en la consola, se ejecuta de inmediato por ().
