// ====================================================
//      Controller Task
// ====================================================

const Task = require('../models').Task;
const serviceCrud = require('../services/crud')
const { successMsg, errorMsg } = require('../utils/responses');

//======================================
//Mostrar todas las tareas
//======================================
async function getTasks(req, res) {
    try {
        await serviceCrud.getAll(req, res, Task)
    } catch (error) {
        console.error(error.toString())
        errorMsg(res, 500, 'Ha ocurrido un error', error)
    }
}

//==========================================
//Mostrar todas las tareas por estatus
//==========================================
async function getTasksByStatus(req, res) {
    try {
        await serviceCrud.getAllByStatus(req, res, Task)
    } catch (error) {
        console.error(error.toString())
        errorMsg(res, 500, 'Ha ocurrido un error', error)
    }
}

//=================================
//Mostrar tarea por id
//=================================
async function getTaskById(req, res) {
    try {
        await serviceCrud.getItemById(req, res, Task)
    } catch (error) {
        console.error(error.toString())
        errorMsg(res, 500, 'Ha ocurrido un error', error)
    }
}

//==============================
//Crear tarea
//==============================
async function saveTask(req, res) {
    let body = req.body;

    let task = {
        name: body.name,
        description: body.description,
        date: new Date(),
        status: false
    }
    body.object = task;

    try {
        await serviceCrud.save(req, res, Task)
    } catch (error) {
        console.error(error.toString())
        errorMsg(res, 500, 'Ha ocurrido un error', error)
    }

}

//==============================
// Actualizar tarea
//==============================
async function updateTask(req, res) {
    try {
        await serviceCrud.updateById(req, res, Task)
    } catch (error) {
        console.error(error.toString())
        errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error)
    }
}

//==============================
// Cambiar status de tarea
//==============================
async function updateStatusTask(req, res) {
    try {
        await serviceCrud.updateStatusById(req, res, Task)
    } catch (error) {
        console.error(error.toString())
        errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error)
    }
}

//==============================
//  Eliminar tarea
//==============================
async function deleteTask(req, res) {
    try {
        await serviceCrud.deleteById(req, res, Task)
    } catch (error) {
        console.error(error.toString())
        errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error)
    }
}

module.exports = {
    getTasks,
    getTasksByStatus,
    getTaskById,
    saveTask,
    updateTask,
    updateStatusTask,
    deleteTask
}